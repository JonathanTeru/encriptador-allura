document.addEventListener('DOMContentLoaded', (event) => {
  // Creamos un objeto que mapea cada letra a su palabra encriptada correspondiente
let map = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};

// Agregamos un evento de escucha al botón "Encriptar"
document.getElementById('encrypt').addEventListener('click', function() {
  // Obtenemos el texto de entrada
  let input = document.getElementById('entradadetexto').value;
  let encrypted = '';//aqui es donde ira el rsultado
  // Recorremos cada letra del texto de entrada
  for (let i = 0; i < input.length; i++) {
    // Si la letra está en nuestro mapa, la reemplazamos por la palabra encriptada
    if (map[input[i]]) {
      encrypted += map[input[i]];
    } else {
      // Si la letra no está en nuestro mapa, la dejamos como está
      encrypted += input[i];
    }
  }
  // Mostramos el texto encriptado en el área de resultado
 document.getElementById('personita').textContent = '';
document.getElementById('titulo1').textContent = '';
document.getElementById('txt2').textContent = '';
document.getElementById('resultado').textContent = encrypted;

});

// Agregamos un evento de escucha al botón "Desencriptar"
document.getElementById('decrypt').addEventListener('click', function() {
  // Obtenemos el texto de entrada
  let input = document.getElementById('entradadetexto').value;
  let decrypted = input; // Aquí es donde irá el resultado.
  // Recorremos cada letra en nuestro mapa
  for (let key in map) {
    // Creamos una expresión regular para buscar la palabra encriptada en el texto
    let re = new RegExp(map[key], 'g');
    // Reemplazamos cada ocurrencia de la palabra encriptada por la letra original
    decrypted = decrypted.replace(re, key);
  }
  // Mostramos el texto desencriptado en el área de resultado
 // Mostramos el texto desencriptado en el área de resultado
 document.getElementById('personita').textContent = '';
 document.getElementById('titulo1').textContent = '';
document.getElementById('txt2').textContent = '';
document.getElementById('resultado').textContent = decrypted;

});

document.getElementById('entradadetexto').addEventListener('input', function() {
  // Agregamos un alert al inicio del evento
  
  if (this.value) {
      // Si hay texto, ocultamos los elementos
      document.getElementById('personita').style.display = 'none';
      document.getElementById('personita2').style.display = 'none';
      document.getElementById('titulo1').textContent = '';
      document.getElementById('txt2').textContent = '';
      document.getElementById('Copiar').  style.display = 'block' ;

    
  } else {
      // Si no hay texto, mostramos los elementos
      document.getElementById('personita2').style.display = 'block';
      document.getElementById('titulo1').textContent = 'Ningún mensaje fue encontrado.';
      document.getElementById('txt2').textContent = 'Ingresa el texto que deseas encriptar.';
      document.getElementById('resultado').textContent = '';
      document.getElementById('Copiar').  style.display = 'none' ;
  }
  // Agregamos un alert al final del evento
  
});
// Obtenemos el botón Copiar
let boton = document.getElementById("Copiar");
// Agregamos un evento de escucha al botón
boton.addEventListener("click", function() {
  // Obtenemos el texto del elemento resultado
  let texto = document.getElementById("resultado").textContent;
  // Creamos un elemento textarea temporal
  let area = document.createElement("textarea");
  // Asignamos el texto como valor del textarea
  area.value = texto;
  // Añadimos el textarea al documento
  document.body.appendChild(area);
  // Seleccionamos el contenido del textarea
  area.select();
  // Ejecutamos el comando copy
  document.execCommand("copy");
  // Eliminamos el textarea del documento
  document.body.removeChild(area);
});


})