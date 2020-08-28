/*
  Chiedi all’utente la sua email,
  controlla che sia nella lista di chi può accedere,
  stampa un messaggio appropriato
*/

// 1. creo una lista di email
var emails = ["samuele@madrigali.dev", "gigi@gmail.com", "fabrizio@tiscali.it"];
// 2. chiedo all'utente la sua email
var emailUtente = "gigi@gmail.com";
// 3. verifico se l'email dell'utente è presente nella lista
var trovato = false;

// for (var i = 0; i < emails.length; i++) {
//   if(emails[i] == emailUtente) {
//     trovato = true;
//   }
//   console.log(i);
// }
var contatore = 0;

while (trovato == false && contatore < emails.length) {

  if(emails[contatore] == emailUtente) {
    trovato = true;
  }
  console.log(contatore);
  contatore++;

}

if(trovato) {
  console.log("L'email è stata trovata");
} else {
  console.log("L'email NON è stata trovata");
}
