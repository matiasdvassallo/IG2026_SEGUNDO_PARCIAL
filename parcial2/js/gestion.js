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

// CAPTURO LAS VARIABLES NECESARIAS PARA EL FUNCIONAMIENTO DEL EJERCICIO.
// A SU VEZ CREO UN ARRAY VACÍO DONDE IRÁN A PARAR LOS DATOS DE LAS INSTALACIONES QUE SE INTRODUZCAN.
// ADEMÁS DE UN CONTADOR QUE GUARDARÁ LA CANTIDAD DE INSTALACIONES QUE SE CARGUEN.

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

// DECLARO UN EVENTO A PARTIR DE UN SUBMIT, LE QUITO SU FUNCIÓN DEFAULT.
// LUEGO, HAGO QUE LOS DATOS QUE RECIBA ESTE FORM SE GUARDEN EN LAS VARIABLES DECLARADAS ANTERIORMENTE EN FORMATO DE NÚMERO.
// REALIZO LA VALIDACIÓN DE DATOS CON UN IF, DE MODO QUE TODOS LOS DATOS DEBEN SER MAYORES A 0.
// UNA VEZ QUE SE INGRESAN LOS DATOS DE ESTE FORM, SE DESHABILITA EL MISMO Y SE HABILITA EL SIGUIENTE.
// DE INGRESAR DATOS QUE NO CORRESPONDAN, SALDRÁ EL ALERT.

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

// VUELVO A DECLARAR UN EVENTO COMO EN EL PRIMER FORM, CON PREVENT DEFAULT, Y GUARDO LOS DATOS INGRESADOS DE ESTE EN LAS VARIABLES NECESARIAS. EN ESTE CASO SOLO DOS TIENEN QUE SER NUMÉRICAS.
// VALIDO LOS DATOS NUEVAMENTE: LOS DATOS NUMÉRICOS DEBEN SER MAYORES A 0 Y EL DATO NOMNRE TIENE QUE EXISTIR.
// LUEGO ESTOS VALORES SE GUARDAN EN EL ARRAY DE OBJETOS, AUMENTA EL CONTADOR DE INSTALACIONES Y SE REFRESCA EL INPUT EN CASO DE TENER QUE PONER MAS DATOS DE INSTALACIONES
// SI SE SELECCIONAR 2 INSTALACIONES EN EL PRIMER ARRAY, SÍ O SÍ HAY QUE PONER DATOS DUPLICADOS.
// CUANDO LA CANTIDAD DE INSTALACIONES CARADAS SEA IGUAL O LLEGUE A SUPERAR LAS DEL CONTADOR, SE DESHABILITA ESTE FORM Y SE HABILITA EL BOTON PARA CALCULAR LOS RESULTADOS.

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

// SE REALIZAN LOS CÁLCULOS NECESARIOS
// FINALMENTE SE MUESTREN EN LOS TRES <p> CORRESPONDIENTES DEL HTML: EL COSTO TOTAL DE UN DÍA DE TRABAJO, LA INSTALACIÓN CON MÁS DÍAS DE PRODUCCIÓN, LA CANTIDAD DE DÍAS Y EL COSTO; Y EL PORCENTAJE DEL PRESUPUESTO TOTAL QUE REPRESENTA ESA INSTALACIÓN.
// FINALMENTE SE DESHABILITA EL BOTÓN DE CALCULAR Y SE HABILITA EL BOTÓN DE REINICIAR

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

// EL BOTÓN DE REINICAR AL HACER CLICK REFRESCA TODOS LOS DATOS INGRESADOS PARA PODER EJECUTAR EL PROGRAMA NUEVAMENTE.