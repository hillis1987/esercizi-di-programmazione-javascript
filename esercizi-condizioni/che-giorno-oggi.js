/*
  Che giorno è oggi?
  Scrivi un programma che dato un numero intero compreso tra 1 a 7
  visualizzi il corrispondente giorno della settimana. Sapendo che:
    1 = lunedì
    2 = martedì
    3 = mercoledì
    ...
    7 = domenica
  Utilizza il costrutto Switch-case e prevedi anche il caso in cui il valore immesso non sia valido
  (nel caso stampare un messaggio di errore a tua scelta).

  Esempi:
    Input: numero = 6
    Output: "Sabato"

    Input: numero = 10
    Output: "Errore! Giorno della settimana non valido!"

  Variante:
  Scrivere una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.

  http://www.imparareaprogrammare.it
*/
//switch con giorni settimanali
var numb = prompt('inserisci un numero tra 1 e 7'); //funzione per leggere input da tastiera
switch (numb) {
  case '1':
    console.log('Lunedì');
    break;
  case '2':
    console.log('Martedì');
    break;
  case '3':
    console.log('Mercoledì');
    break;
  case '4':
    console.log('Giovedì');
    break;
  case '5':
    console.log('Venerdì');
    break;
  case '6':
    console.log('Sabato');
    break;
  case '7':
    console.log('Domenica');
    break;
  default:
    console.log('Errore! Giorno della settimana non valido!');
}
var numb = prompt('inserisci un numero tra 1 e 12'); //funzione per leggere input da tastiera
switch (numb) {
  case '1':
    console.log('Gennaio');
    break;
  case '2':
    console.log('Febbraio');
    break;
  case '3':
    console.log('Marzo');
    break;
  case '4':
    console.log('Aprile');
    break;
  case '5':
    console.log('Maggio');
    break;
  case '6':
    console.log('Giugno');
    break;
  case '7':
    console.log('Luglio');
    break;
  case '8':
    console.log('Agosto');
    break;
  case '9':
    console.log('Settembre');
    break;
  case '10':
    console.log('Ottobre');
    break;
  case '11':
    console.log('Novembre');
    break;
  case '12':
    console.log('Dicembre');
    break;
  default:
    console.log('Errore! Giorno della settimana non valido!');
}
