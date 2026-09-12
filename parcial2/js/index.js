let contenido = document.querySelector('#dato');
let boton = document.querySelector('#boton-dato');
let posicion = 1;
let datos = ['1) Casey Reas es co-creador de Processing, un lenguaje de programación visual diseñado para artistas y estudiantes de diseño.',
'2) Junto a Ben Fry desarrolló Processing como una herramienta educativa en el MIT Media Lab en 2001.',
'3) Su obra artística se basa en la escritura de algoritmos que generan imágenes en constante cambio.',
'4) Está influenciado por el arte conceptual y sistemático, especialmente por las instrucciones visuales de Sol LeWitt.',
'5) Ha realizado exposiciones en museos como el MoMA, el Centre Pompidou y el ICA de Londres.',
'6) Muchas de sus obras son generadas en tiempo real, por lo que nunca se ven exactamente igual dos veces.',
'7) Publicó libros fundamentales sobre programación creativa como Processing: A Programming Handbook for Visual Designers and Artists.',
'8) Ha trabajado como profesor en el Departamento de Diseño de Medios en la UCLA (Universidad de California, Los Ángeles).',
'9) Explora el arte generativo como un proceso basado en reglas simples que producen resultados complejos y emergentes.',
'10) Además de visuales digitales, ha realizado impresiones generativas de gran formato como obras únicas o en series.'];

// Declaré una variable que captura el elemento con el id 'dato' y otra variable que captura el elemento con el id 'boton-dato'.
// También declaré una variable 'posicion' inicializada en 1 y un array "datos" que contiene los 10 datos curiosos sobre Casey Reas.
// La variable posicion comienza en 1 porque el primer dato ya está mostrado en el HTML.

boton.addEventListener('click',() => {
    contenido.innerText = datos[posicion];
    posicion++;
    if(posicion >= datos.length){
        posicion = 0;
    }
});

// Agregué un event listener a '#boton-dato' que, al hacer clic, cambia el texto del p con id 'dato' al siguiente dato del array.
// Después de mostrar un dato, se incrementa la variable 'posicion' en 1 para apuntar al siguiente dato. 
// Si "posicion" alcanza la longitud del array, se reinicia a 0 para que vuelva a mostrar el primer dato.