"use-strict"
//Capturamos los elementos del DOM
let edadPasajero = document.querySelector("#edad");
let discapacidad = document.querySelector("#discapacidad");
let jubilado = document.querySelector("#jubilado");
let cantidad = document.querySelector("#cantidad");
let seguro = document.querySelector("#seguro");
let table = document.querySelector("#tabloide");
//Añadimos los listener de eventos en los botones
document.querySelector("#btn_cart").addEventListener("click", addToJSON);
document.querySelector("#btn_clean").addEventListener("click", vaciarJSON);
let comboUsuario;

const COMBOS = [
    {
        "id": 1,
        "tipo": "1 pax Niños",
        "precio": 1000,
        "seguro_incluido": true,
        "seguro": "",
        "guia_turistica": false,
        "pension": "Completa"
    },
    {
        "id": 2,
        "tipo": "1 pax Adultos",
        "precio": 2000,
        "seguro_incluido": true,
        "seguro": "",
        "guia_turistica": false,
        "pension": "Desayuno"
    },
    {
        "id": 3,
        "tipo": "1 pax Jubilados",
        "precio": 1500,
        "seguro_incluido": true,
        "seguro": "",
        "guia_turistica": false,
        "pension": "Desayuno"
    },
    {
        "id": 4,
        "tipo": "1 pax Discapacidad",
        "precio": 1200,
        "seguro_incluido": true,
        "seguro": "",
        "guia_turistica": true,
        "pension": "Media"
    }
];

function getTipoDeCombo() {

if (discapacidad.checked) //verificamos si posee discapacidad
    {
        comboUsuario = COMBOS[3];
    } else
    if (edadPasajero.value < 14) //menor de 14, es niño
    {
        comboUsuario = COMBOS[0];
    }
    else if (jubilado.checked) //sino, verificamos si es jubilado
    {
        comboUsuario = COMBOS[2];
    }
    else //sino... es adulto
    {
        comboUsuario = COMBOS[1];
    }
}


createTable(); //Creamos la tabla ni bien carga el JS
inicializarJSON();

function refreshTable() {
    vaciarTabla();
    /* DESARROLLAR ESTE METODO QUE CREA LA TABLA LA PRIMERA VEZ Y LUEGO RENUEVA LA TABLA CADA VEZ QUE SE ACTUALIZA EL JSON */
    //borra toda la tabla
    //recorre el json y va añadiendo de a 1 fila
    for (let i = 0; i < datos_tabla.length; i++) {
        const row = document.createElement("tr");
        const c1 = createTableCell(datos_tabla[i].tipo);
        const c2 = createTableCell(datos_tabla[i].pension);
        const c3 = createTableCell(datos_tabla[i].precio);
        const c4 = createTableCell(datos_tabla[i].seguro);
        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);
        row.appendChild(c4);
        if (datos_tabla[i].seguro == "Completo") { //Si tiene seguro Completo, destacamos la fila!
            row.classList.add("fila-destacada");
          }
        tblBody.appendChild(row);
        table.appendChild(tblBody);
        document.body.appendChild(table);
    }
    limpiarCamposDOM();
}

function createTable() {
    const tblHead = document.createElement("thead");
    const tableRow = document.createElement("tr");
    tblHead.appendChild(tableRow);
    table.appendChild(tblHead);
    const c1 = createTableCell("Tipo de combo");
    const c2 = createTableCell("Pension");
    const c3 = createTableCell("Precio");
    const c4 = createTableCell("Tipo de seguro");
    tableRow.appendChild(c1);
    tableRow.appendChild(c2);
    tableRow.appendChild(c3);
    tableRow.appendChild(c4);
    tblBody = document.createElement("tbody");
}

function createTableCell(text) {
    const cell = document.createElement("td");
    cell.appendChild(document.createTextNode(text));
    return cell;
}

function addToJSON() {

    if (cantidad.value != "" && edadPasajero.value != "") {
        for (let i = 1; i <= cantidad.value; i++) {
            getTipoDeCombo();
            datos_tabla.push({
                "id": comboUsuario.id,
                "tipo": comboUsuario.tipo,
                "precio": comboUsuario.precio,
                "seguro_incluido": comboUsuario.seguro_incluido,
                "seguro": seguro.value,
                "guia_turistica": comboUsuario.guia_turistica,
                "pension": comboUsuario.pension,
                "cantidad": cantidad.value
            });
        }
        refreshTable();
    }
}

function limpiarCamposDOM() {
    edadPasajero.value = "";
    cantidad.value = "";
    jubilado.checked = false;
    discapacidad.checked = false;
    seguro.value="Salud";
}

function inicializarJSON() {
    vaciarTabla();
    datos_tabla = [
        {
            "tipo": "Translado al hotel",
            "pension": "N/A",
            "precio": "0",
            "seguro": "N/A"
        },
        {
            "tipo": "Uso de Bicicletas",
            "pension": "N/A",
            "precio": "0",
            "seguro": "N/A"
        },
        {
            "tipo": "Un dia de Spa por Pax",
            "pension": "N/A",
            "precio": "0",
            "seguro": "N/A"
        }
    ]
}

function vaciarTabla() {
    while (tblBody.firstChild) {
        tblBody.removeChild(tblBody.firstChild);
    }
}

function vaciarJSON() {
    vaciarTabla();
    inicializarJSON();
}
