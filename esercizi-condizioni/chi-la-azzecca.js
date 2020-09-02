/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/
var giocatore1 = 5;
var giocatore2 = 10;

var banco = Math.floor(Math.random()*(100-1)+1);

console.log(banco);
var diff1 = Math.abs(banco - giocatore1);
var diff2 = Math.abs(banco - giocatore2);
var flag = false;
if (giocatore1==banco) {
  flag = true;
  console.log('Complimenti giocatore1 hai vinto');
} else if (giocatore2==banco) {
  flag = true;
  console.log('Complimenti giocatore2 hai vinto');
}  if ((diff1>diff2) && (flag == false)) {
  console.log('Nessuno dei due ha azzeccato il numero, ma il giocatore2 si è avvicinato di più!');
} else if ((diff1<diff2) && (flag == false)) {
  console.log('Nessuno dei due ha azzeccato il numero, ma il giocatore1 si è avvicinato di più!');
}
