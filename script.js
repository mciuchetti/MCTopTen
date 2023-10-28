let autore = ["Queen", "Simply red", "Guns N'Roses"];
let titolo = ["Don't stop me now", "Stars", "Patience"];
let voto = [8, 10, 9];
let scelta = [];

function popola() {
  let tableEl = document.getElementById("tabella");
  let oldTBodyEl = tableEl.getElementsByTagName('tbody')[0];
  let newTBodyEl = document.createElement('tbody');

  for(i=0; i<autore.length; i++) {
    const trEl = newTBodyEl.insertRow();
    let tdEl = trEl.insertCell();
    tdEl.appendChild(document.createTextNode(autore[i]));
    tdEl = trEl.insertCell();
    tdEl.appendChild(document.createTextNode(titolo[i]));
    tdEl = trEl.insertCell();
    tdEl.appendChild(document.createTextNode(voto[i]));
}

   tableEl.replaceChild(newTBodyEl, oldTBodyEl);
   let trElS = document.getElementById("branoscelto");
  if (scelta.length > 0){
    trElS.getElementsByTagName('td')[0].innerHTML = scelta[0];
    trElS.getElementsByTagName('td')[1].innerHTML = scelta[1];
    trElS.getElementsByTagName('td')[2].innerHTML = scelta[2];
  }

}

function arrayMax(arr) {
  return Math.max.apply(null, arr);
}[0]

function ordina (){
  autore.reverse();
  titolo.reverse();
  voto.reverse();
  popola();
  console.log(arrayMax(voto));
}

function estrai() {
  if (autore.length>0){

    var criterio = document.getElementById("criterio").value;

switch(criterio) {
  case "1":
    text = "1";
    scelta[0] = autore[0];
    scelta[1] = titolo[0];
    scelta[2] = voto[0];
    autore.shift();
    titolo.shift();
    voto.shift();
    popola();
    break;
  default:
    text = "Errore";
    alert("Non hai scelto il criterio!");
}
  }
}

function cerca() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("ricerca");
  filter = input.value.toUpperCase();
  table = document.getElementById("tabella");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1)       {
        tr[i].style.display = "";
       } else {
        tr[i].style.display = "none";
       }
    }
  }
}

function condividi(){
    s = "My Playlist" + "\n";
    autore.forEach((a, i) => {
    console.log('Index: ' + i + ' Value: ' + a);
    s = s + a + "\n";
    
});
  console.log(s);
  alert(s);
}