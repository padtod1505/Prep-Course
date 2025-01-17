// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  function Usuario(opciones){             // Se crea aqui la funcion constructora (clase) y se le asignan todas las propiedades del objeto opciones
    this.usuario = opciones.usuario
    this.nombre = opciones.nombre
    this.email = opciones.email
    this.password = opciones.password
  }
  Usuario.prototype.saludar = function(){    // se agrega este metodo al prototipo de usuario para que realice la funcion de saludar
    return 'Hola, mi nombre es ' + this.nombre  
  }
  return Usuario;   // me devuelve la clase usuario
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function(){         // Se crea esta funcion agregandola al prototipo de Constructor y se le da la funcion de saludar
    return 'Hello World!';
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  
  String.prototype.reverse=function(){    // Se crea este metodo en el prototipo de String para que por medio de un ciclo for me valla guardando los caracteres en una variable y los regrese invertidos
    var stringinvertida = ''
    for(var i = this.length - 1; i>=0; i--){
    stringinvertida = stringinvertida + this.charAt(i);
    }
    return stringinvertida;
  }
  
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      // Tu código:
      this.nombre = nombre
      this.apellido = apellido
      this.edad = edad
      this.domicilio = domicilio

      //this.detalle = function() {  // Podria declarar el metodo dentro de la clase tambien como en el ejemplo pero aqui lo declare afuera como esta abajo y fuera de la clase
        //return { 
          //Nombre: this.nombre,
          //Apellido: this.apellido,
          //Edad: this.edad,
          //Domicilio: this.domicilio
        //}

      }
    }

  Persona.prototype.detalle = function(){ // el metodo lo declaro fuera de la clase utilizando .prototype (si fuera dentro de la calse no se usa .protoype) pero ambas funcionan
      return { 
        Nombre: this.nombre,
        Apellido: this.apellido,
        Edad: this.edad,
        Domicilio: this.domicilio
      }
    }



function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  const persona = new Persona(nombre, apellido, edad, dir);    // Aqui se utiliza el comando 'new' para crear un objeto con las propiedades declaradas utilizando la plantilla de la clase Persona que fue creada en el ejercicio anterior
  return persona
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function(nombre){                 //Se crea un metodo en el prototipo de la clase persona para que por medio del nombre dado me regrese un saludo y la edad de la persona guardada en los objetos
    return this.nombre + ', ' + this.edad + ' años'
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
