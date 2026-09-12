//PRIMER FORM
let formGeneral = document.querySelector('#form-general');
let cantidad = document.querySelector('#cantidad');
let horas = document.querySelector('#horas');
let honorario = document.querySelector('#honorario');
let confirmar = document.querySelector('#confirmar');
//------------------------------------------------------------------

//SEGUNDO FORM
let formInstalacion = document.querySelector('#form-instalacion');
let nombre = document.querySelector('#nombre');
let personas = document.querySelector('#personas');
let dias = document.querySelector('#dias');
let agregar = document.querySelector('#agregar');
//------------------------------------------------------------------

//RESULTADOS
let calcular = document.querySelector('#calcular');
let resultado1 = document.querySelector('#resultado1');
let resultado2 = document.querySelector('#resultado2');
let resultado3 = document.querySelector('#resultado3');
//--------------------------------------------------------------------

let reiniciar = document.querySelector('#reiniciar');

let cantidadValor;
let horasValor;
let honorarioValor;

let instalaciones = [];
let instalacionesCargadas = 0;

//PRIMER FORM
formGeneral.addEventListener('submit', (e) => {

    e.preventDefault();

    cantidadValor = Number(cantidad.value);
    horasValor = Number(horas.value);
    honorarioValor = Number(honorario.value);

    if (cantidadValor > 0 && horasValor > 0 && honorarioValor > 0) {

        cantidad.disabled = true;
        horas.disabled = true;
        honorario.disabled = true;
        confirmar.disabled = true;

        nombre.disabled = false;
        personas.disabled = false;
        dias.disabled = false;
        agregar.disabled = false;

    } else {

        alert('Todos los valores deben ser mayores a 0!');

    }

});
//------------------------------------------------------------------

//SEGUNDO FORM
formInstalacion.addEventListener('submit', (e) => {

    e.preventDefault();

    let nombreValor = nombre.value;
    let personasValor = Number(personas.value);
    let diasValor = Number(dias.value);

    if (nombreValor != '' && personasValor > 0 && diasValor > 0) {

        let instalacion = {
            nombre: nombreValor,
            personas: personasValor,
            dias: diasValor
        };

        instalaciones.push(instalacion);

        instalacionesCargadas++;
        nombre.value = '';
        personas.value = '';
        dias.value = '';

        if (instalacionesCargadas >= cantidadValor) {

            nombre.disabled = true;
            personas.disabled = true;
            dias.disabled = true;
            agregar.disabled = true;

            calcular.disabled = false;
        }

    } else {

        alert('Todos los datos de la instalación deben ser válidos!');

    }

});
//--------------------------------------------------------------------

//RESULTADOS
calcular.addEventListener('click', () => {

    let totalPersonas = 0;
    let costoTotalEstudio = 0;

    let mayorDias = instalaciones[0].dias;
    let instalacionMayor = instalaciones[0];

    //UTILICÉ AYUDA DE LA IA PARA LOS CÁLCULOS
    for (let i = 0; i < instalaciones.length; i++) {

        totalPersonas += instalaciones[i].personas;
     
        let costoInstalacion =
            instalaciones[i].personas *
            horasValor *
            honorarioValor *
            instalaciones[i].dias;

        costoTotalEstudio += costoInstalacion;

        if (instalaciones[i].dias > mayorDias) {

            mayorDias = instalaciones[i].dias;
            instalacionMayor = instalaciones[i];

        }

    }

    let costoDia =
        totalPersonas *
        horasValor *
        honorarioValor;

    let costoInstalacionMayor =
        instalacionMayor.personas *
        horasValor *
        honorarioValor *
        instalacionMayor.dias;

    let porcentaje =
        costoInstalacionMayor * 100 / costoTotalEstudio;

    resultado1.innerText =
        'Costo total de un día de trabajo: $' + costoDia;

    resultado2.innerText =
        'La instalación con más días de producción es ' +
        instalacionMayor.nombre +
        ', necesita ' +
        instalacionMayor.dias +
        ' días y su costo total es $' +
        costoInstalacionMayor;

    resultado3.innerText =
        'La instalación representa el ' +
        porcentaje +
        '% del costo total del estudio';

    calcular.disabled = true;
    reiniciar.disabled = false;

});
//--------------------------------------------------------------------

//BOTÓN REINICIO
reiniciar.addEventListener('click', () => {

    cantidad.value = '';
    horas.value = '';
    honorario.value = '';

    nombre.value = '';
    personas.value = '';
    dias.value = '';

    cantidad.disabled = false;
    horas.disabled = false;
    honorario.disabled = false;
    confirmar.disabled = false;

    nombre.disabled = true;
    personas.disabled = true;
    dias.disabled = true;
    agregar.disabled = true;

    calcular.disabled = true;
    reiniciar.disabled = true;

    resultado1.innerText = '';
    resultado2.innerText = '';
    resultado3.innerText = '';

    instalaciones = [];
    instalacionesCargadas = 0;

    cantidadValor = 0;
    horasValor = 0;
    honorarioValor = 0;

});
//--------------------------------------------------------------------