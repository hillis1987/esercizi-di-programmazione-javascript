/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/
var a = 5, b = 0;
var operazione = prompt('Scegli quale operazione vuoi effettuare: somma, sottrazione, moltiplicazione, divisione, modulo, potenza, media');
switch (operazione) {
  case 'somma':
    var somma = a+b;
    console.log(somma);
    break;
  case 'sottrazione':
    var sottrazione = a-b;
    console.log(sottrazione);
    break;
  case 'moltiplicazione':
    var moltiplicazione = a*b;
    console.log(moltiplicazione);
    break;
  case 'divisione':
    if (b == 0) {
      console.log('calcolo impossibile');
      break;
    }
    var divisione = a/b;
    console.log(divisione);
    break;
  case 'modulo':
    a = parseInt(a);
    b = parseInt(b);
    if (b == 0) {
      console.log('impossibile effettuare l\'operazione richiesta');
      break;
    }
    var modulo = a%b;
    console.log(modulo);
    break;

  case 'potenza':
    var potenza = a**b;
    console.log(potenza);
    break;
  case 'media':
    var media = (a+b)/2;
    console.log(media);
    break;
  default:
    console.log('Operazione non valida, riprovare');
}
