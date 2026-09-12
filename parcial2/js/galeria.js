let imagen = document.querySelector('#img4');
let año = document.querySelector('#año');
let nombre = document.querySelector('#titulo-obra');
let botonobra = document.querySelector('#boton-obra span');
let posicion = 1;
let obras = [
    {
        source: 'img/galeria/reas-2.jpg',
        alt1: 'Una de las obras de Reas: Still Life (HSB E), 2023',
        titulo: 'Still Life (HSB E)',
        fecha: '2023',
    },
    {
        source: 'img/galeria/galeria-1.jpg',
        alt1: 'Una de las obras de Reas: Untitled film still 3.1, 2015',
        titulo: 'Untitled film still 3.1',
        fecha: '2019/2023',
    },
    {
        source: 'img/galeria/galeria-2.jpg',
        alt1: 'Una de las obras de Reas: CSRSNT-MRIE-05-of-32.png, 2025',
        titulo: 'CSRSNT-MRIE-05-of-32.png',
        fecha: '2025',
    },
    {
        source: 'img/galeria/galeria-3.jpg',
        alt1: 'Una de las obras de Reas: Process 18 from process compendium a and b, 2010',
        titulo: 'Process 18',
        fecha: '2010',
    },
    {
        source: 'img/galeria/galeria-4.jpg',
        alt1: 'Una de las obras de Reas: Detail of path 09. 2001.',
        titulo: 'Detail of path 09',
        fecha: '2001',
    }

];

botonobra.addEventListener('click', () => {
    imagen.src = obras[posicion].source;
    imagen.alt = obras[posicion].alt1;
    nombre.innerText = obras[posicion].titulo;
    año.innerText = obras[posicion].fecha;
    posicion++;
    if (posicion >= obras.length) {
        posicion = 0;
    }
});

let tema = document.querySelector('.columna-grande')
let botonTema = document.querySelector("#boton-tema span");
let titulo1 = document.querySelectorAll('#art6 h2 span');
let parrafos = document.querySelectorAll('.obrap')
let color = document.querySelector('#color');
let oscuro = false

botonTema.addEventListener('click', () => {

    if (oscuro === false) {

        tema.style.backgroundColor = 'rgb(0, 0, 0, 0.7)';
        tema.style.color = 'white';
        tema.style.border = '3px solid lightblue';

        for (let i = 0; i < titulo1.length; i++) {
        titulo1[i].style.color = 'lightblue';
        titulo1[i].style.backgroundColor = '#1d235c';
        
        }

        for (let i = 0; i < parrafos.length; i++) {
            parrafos[i].style.color = 'white';
        }

        color.innerText = '(Cambiá el tema de esta sección de oscuro a claro)';
        color.style.color = 'lightblue';

        botonTema.innerText = 'TEMA CLARO';
        botonTema.style.color = 'lightblue'
        botonTema.style.backgroundColor = '#1d235c';
        botonTema.style.border = '3px solid lightblue';

        botonobra.style.color = 'lightblue';
        botonobra.style.backgroundColor = '#1d235c';
        botonobra.style.border = '3px solid lightblue';

        imagen.style.border = '3px solid lightblue';

        oscuro = true;

//UTILICÉ UNA SUGERENCIA DE LA IA PARA ESTA PARTE DEL CÓDIGO

    } else {

        tema.style.backgroundColor = '';
        tema.style.color = '';
        tema.style.border = '';

        for (let i = 0; i < titulo1.length; i++) {
        titulo1[i].style.color = '';
        titulo1[i].style.backgroundColor = '';
        
        }

        for (let i = 0; i < parrafos.length; i++) {
            parrafos[i].style.color = '';
        }

        color.innerText = '(Cambiá el tema de esta sección de oscuro a claro)';
        color.style.color = '';

        botonTema.innerText = 'TEMA OSCURO';
        botonTema.style.color = '';
        botonTema.style.backgroundColor = '';
        botonTema.style.border = '';

        botonobra.style.color = '';
        botonobra.style.backgroundColor = '';
        botonobra.style.border = '';

        imagen.style.border = '';

        oscuro = false;

    }

});