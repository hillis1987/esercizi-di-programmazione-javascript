/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/
var a =[3, 5, 10, 2, 8];
var appo = 0;

for (var i = 0; i < a.length; i++) {
  appo += a[i];
}

var media = appo/a.length;
console.log(media);
var min = [];
for (var i = 0; i < a.length; i++) {
  if (a[i]<media)
      min.push(a[i]);
  }
console.log(min);
