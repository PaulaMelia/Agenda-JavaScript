function f11(){
    console.clear();
    console.log(agenda);

}

function f12(){
    console.clear();
    console.log(agenda[0].contactos[3]);
}

function f13(){
    console.clear();
   // console.table(agenda[1]);
   console.log(agenda[1]);
}



function f21(buscar){
    let j;
    let servicio = prompt("¿Qué quieres buscar?");
    let elemento = agenda.length;
    let encontrado = false;
    let hallado = false;
    let mostrar;
let i = 0;

    while (i< elemento && !encontrado){
        j=0;
        while (j<agenda[i].contactos.length && !hallado){
            if (agenda[i].contactos[j].contacto == servicio){
                mostrar = agenda[i].contactos[j];
                encontrado=true;
                hallado=true;
            }
            j++;
        }
        i++;
    }


    
    switch (buscar){
        case "1":
            console.log(mostrar);
            break;
            case "2":
                console.log(mostrar.web);
                break;
                case "3":
                document.getElementById("mostrar").innerHTML = "Estos son los datos que estás buscando " +mostrar.web + " y " + mostrar.numeroTelefono;
                console.log(mostrar.numeroTelefono);
                console.log(mostrar.web);
                break;
    }

  
}


/*
function f22(){
  let cerca = prompt("De que entidad quieres informacion");
  let i = fcerca (cerca)[0];
  let j = fcerca (cerca)[1];
  console.table(agenda[i].contactos[j].web);

};
function f23(){
  let cerca = prompt("De que entidad quieres informacion");
  let i = fcerca (cerca)[0];
  let j = fcerca (cerca)[1];
  console.table(agenda[i].contactos[j].web);
  console.table(agenda[i].contactos[j].numeroTelefono);

};

function fcerca(cerca){
  console.clear();
  let trobat = false;
  let i = 0;
  let j = 0;
  let posicioI;
  let posicioJ;
  while(i< agenda.length &&!trobat){
    j =0;

    while (j< agenda[i].contactos.lengthto){
      if (agenda[i].contactos[j].contacto == cerca){
              posicioI = i;
      posicioJ =j;
      trobat = true;
    };
    j++
  };
  i++
};
  return [posicioI, posicioJ];
};
*/