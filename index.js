/**
 * Crearemos una variable para almacenar nuestras palabras
 */
const arregloPalabras = [];

/**
 * aqui accedemos al document.
 * utilizamos el selector 'getElementById' el cual recibe el id del nodo o elemento
 * del document que queremos accesar.
 * y  utilizamos el metodo addEventListener() el cual sirve para escuchar y recibe 2 argumentos
 * 1er argumento es el nombre del evento que pondremos a escuchar
 * 2do argumento es una expresion funcion anonima o tambien puede recibir una funcion arrow
 */

document
  .getElementById("mayusculas-form")
  .addEventListener("submit", function (event) {
    /**
     * (event)  hace referencia al evento que se captura tambien es habitual usar (e)
     * event.preventDefault() se utiliza para evitar que el evento se ejecute por default
     *al cargar la pagina evitando que se envie el formulario vacio.
     */
    event.preventDefault();

    // hacemos el llamado a nuestra funcion ordenarPalabras()
    ordenarPalabras();
  });

function ordenarPalabras() {
  /**
   *usaremos las siguientes variables para almacenar los nodos y haces las respectivas operaciones
   *resultado de convertir las frases o palabras, del mismo modo tendremos nuestro mensaje de error
   *con su respectivo id='errorMsn' el cual modificaremos para mostrar mensaje de error en caso de presentarse
   */

  const nodoData = document.getElementById("data");
  const nodoArea = document.getElementById("area");

  let nodoErrorMsn = document.getElementById("errorMsn");

  /**
   * accedemos a la propiedad (.value) de cada nodo la cual guarda el valor en texto (string)
   * ingresado por el usuario y lo guaramos en un arreglo inicial, en este caso usaremos el método split(' '),
   * este método nos permite dividir un strign en partes, para este caso al ser una frase la que vamos a dividir en palabras
   * enviaremos como argumento un espacio en blanco (' '), este método retornara un arreglo con las palabras que conforman la
   * frase
   */
  const data = nodoData.value;
  const arregloFrase = data.split(" ");

  /**
   * En este bloque conformaremos el arreglo de palabras a ser mostrado en la vista, recordaremos que inicialmente creamos una arreglo y
   * después creamos otro para dividir una frase en palabras, lo que haremos continuación es añadir el contenido del 'arregloFrase' al
   * 'arregloPalabras', para llevar a a cabo esto vamos a usar la sintaxis spread '(...)' esto básicamente lo que hace es expandir el contenido
   * de nuestro 'arregloPalabras' y añadiremos su contenido mas el contenido del 'arregloFrase', de esta forma tendremos el contenido de ambos
   * arrays
   */
  arregloPalabras.push(...arregloFrase);

  /**
   * Usaremos el método 'sort()' para cumplir con el requerimiento que es ordenar las palabras, el requerimiento indica que deber ser ordenadas
   * por su longitud de caracteres, para ello usaremos el método 'sort()' con los siguientes parámetros: elementoA y elementoB seran los elementos
   * a comparar, lo siguiente es una función de flecha en la cual comparamos la longitud del primer string con el segundo usaremos la propiedad
   * 'length' para dicha comparación.
   */

  arregloPalabras.sort(
    (elementoA, elementoB) => elementoA.length - elementoB.length
  );

  /**
   * Para finalizar lo que haremos es crear una cadena de caracteres con las palabras contenidas en el string y de este modo poder visualizarlas en la vista,
   * para ellos usaremos el método 'join()' el cual concatena el contenido de una arreglo creado una string con todos los elementos, el método 'join()'
   * puede recibir un parametro como criterio de separación entre los elementos concatenados, en nuestro caso usaremos una coma 'join(', ')' y con ello
   * ya tendríamos nuestros elementos concatenados y listos para ser visualizados en el siguiente formato '('un, uno, gato, carro')'
   */

  nodoArea.value = arregloPalabras.join(", ");
  nodoData.value = "";

  /**
   * validaremos que el input del texto no llegue vacio
   * en la expresion la expresion (===) se valida si las comparaciones son iguales
   * si se cumple la condicion sera suficiente para mostrar el mensaje de error
   */
  let mensaje;
  if (data === "") {
    mensaje = "No se permiten <strong>campos vacios</strong>";
    /**
     * hacemos el llamado a nuestra funcion showMsnError() que sera la encargada
     * de mostrar el mensaje de error
     * esta recibe como argumentos el mensaje de error que debera mostrar
     * y el nodo nodoErrorMsn donde se mostrara el mensaje que se envia
     */
    showMsnError(mensaje, nodoErrorMsn);
  }
}

function showMsnError(mensajeError, nodoErrorMsn) {
  /**
   * en nuestro nodoErrorMsn accedemos al metodo .setAttribute()
   * el cual recibe como primer argumento el nombre de la propiead html que desamos modificar
   * para este caso vamos modificar la propiedad 'class' y como segundo argumento
   * enviamos las clases de estilo que seran asignadas a la propiedad 'class' en este caso
   * asignaremos algunas clases de estilos pertenecientes al framework de estilos boostrap
   * bg-danger --> genera un fondo rojo
   * rounded-3 --> redondea las esquinas
   * mb-2 ---> margin-bottom agrega un margen en la parte inferior del nodoErrorMsn
   * p-2 ---> agrega un padding alrededor de todo el nodoErrorMsn
   *
   */

  nodoErrorMsn.setAttribute("class", "bg-danger rounded-3 mb-2 p-2");
  /**
   * modificamos el nodoErrorMsn accediendo a su propiedad .innerHTML
   * la cual nos permite utilizar la sintaxis html para crear etiquetas
   * desde javaScript en este caso crearemos una etiqueta 'strong'
   * para poner en negrita la palabra campos vacios
   */
  nodoErrorMsn.innerHTML = mensajeError;

  /**
   * utilizamos la instruccion de return para romper el flujo de nuestra aplicacion
   * y evitar que se continue ejecutando el codigo que pueda seguir
   */
  return;
}
