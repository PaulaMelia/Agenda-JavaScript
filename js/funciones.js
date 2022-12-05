
function f11() {

    console.clear();
    console.table(agenda);

};

function f12() {

    console.clear();
    console.table(agenda[0].contactos[3]);

};

function f13() {

    console.clear();
    console.table(agenda[1]);

};

function f21() {
    let cerca = prompt("¿De quina entitat vols informació?")
    let i = fcerca(cerca)[0];
    let j = fcerca(cerca)[1];

    console.table(agenda[i].contactos[j]);

};

function f22() {
    let cerca = prompt("¿De quina entitat vols informació?")
    let i = fcerca(cerca)[0];
    let j = fcerca(cerca)[1];

    console.table(agenda[i].contactos[j].web);

};

function f23() {
    let cerca = prompt("¿De quina entitat vols informació?")
    let i = fcerca(cerca)[0];
    let j = fcerca(cerca)[1];

    console.table(agenda[i].contactos[j].web);
    console.table(agenda[i].contactos[j].numeroTelefono);

};

function fcerca(cerca) {
    console.clear();
    let trobat = false
    let i = 0;
    let j = 0;
    let posicioI;
    let posicioJ;

    while (i < agenda.length && !trobat) {
        j = 0;
        while (j < agenda[i].contactos.length) {
            if (agenda[i].contactos[j].contacto == cerca) {
                posicioI = i;
                posicioJ = j;
                trobat = true;
            };
            j++
        };
        i++
    };
    return [posicioI, posicioJ];
};

/*
const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

*/



/*
function f22() {

    console.clear();

    let missatge;
    let cerca = prompt("¿De que entidad deseas información?");
    let trobat = false
    let i = 0;
    let j = 0;



    while (i < agenda.length && trobat == false) {
        j = 0;
        while (j < agenda[i].contactos.length) {
            if (agenda[i].contactos[j].contacto == cerca) {
                missatge = agenda[i].contactos[j].web

                trobat = true;
            };
            j++
        };
        i++
    };
    console.table(missatge);
};

function f23() {

    console.clear();

    let missatge;
    let missatge2;
    let cerca = prompt("¿De que entidad deseas información?");
    let trobat = false
    let i = 0;
    let j = 0;

    while (i < agenda.length && trobat == false) {
        j = 0;
        while (j < agenda[i].contactos.length) {
            if (agenda[i].contactos[j].contacto == cerca) {
                missatge = agenda[i].contactos[j].numeroTelefono;
                missatge2 = agenda[i].contactos[j].web;

                trobat = true;
            };
            j++
        };
        i++
    };
    console.table(missatge);
    console.table(missatge2);

};
*/




