// Gioco dei dadi, chi fa di più vince

// 1. lancio dado giocatore 1, genero un numero random fra 1 e 6
var numeroGiocatore1 = Math.floor(Math.random() * 6) + 1;
// 2. lancio dado giocatore 2, genero un numero random fra 1 e 6
var numeroGiocatore2 = Math.floor(Math.random() * 6) + 1;

var messaggio = "Parità!";

console.log("Giocatore 1: " + numeroGiocatore1);
console.log("Giocatore 2: " + numeroGiocatore2);
/* 3. controllare chi ha vinto
      - se il numero del giocare 1 è > del numero del giocare 2 allora ha vinto il giorcatore 1
      - se il numero del giocare 2 è > del numero del giocare 1 allora ha vinto il giorcatore 2
      - altrimenti i numeri sono uguali, pareggio!
*/
if (numeroGiocatore1 > numeroGiocatore2) {
messaggio = "Ha vinto il giocatore 1";
} else if (numeroGiocatore2 > numeroGiocatore1) {
messaggio = "Ha vinto il giocatore 2";
}

console.log(messaggio);
