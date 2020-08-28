var listaEmail = [];

do {
  var inputUtente = prompt("Inserisci email, concludi l'inserimento digitando 0");
  if(inputUtente != 0) {
    listaEmail.push(inputUtente);
  }
} while(inputUtente != 0)

console.log(listaEmail);
