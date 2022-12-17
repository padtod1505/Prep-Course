// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);    // se utiliza las funciones .toUppercase para convertir a mayusculas 
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();                                 // para invocar un cb es necesario agregar los parentesis 
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var suma = numeros.reduce(function(acc, elemento){               //.reduce no ayuda a ir almacenando los valores del arreglo en el elemento y los va sumando con el valor acumulado
   return acc + elemento
  })
  cb(suma)
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(elemento){               //.forEach hace un recorrido por cada elemento en la matriz y la va alacenando en el elemento el cual se guarda en el callback
    cb(elemento);
  })
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var array2 = array.map(function(elemento){              //.map busca en la matriz y guarda en el elemento para despues pasar ese elemento al callback 
   return cb(elemento)
  })
  return array2;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  const array2 = [];
  array.forEach(function(elemento){           // use un .forEach para el arreglo e ir comparando cada valor para ver si empezaba con la letra a, despues use un if para valorar esta premisa y en caso de ser verdadera usas el .push para guardarla en un nuevo arreglo
    if (elemento.charAt(0)==='a'){     
      array2.push(elemento)
    }
  })
  return array2;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
