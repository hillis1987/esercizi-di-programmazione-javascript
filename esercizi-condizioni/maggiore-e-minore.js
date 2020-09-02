/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2


  http://www.imparareaprogrammare.it
*/
var a = 31, b = -18, c = 4, d = -2;
var max = a;
var min = b;
//max
if ((c>a)&&(c>b)&&(c>d)){
  max=c;
} else if ((a>b)&&(a>c)&&(a>d)) {
  max=a;
}else if ((b>a)&&(b>c)&&(b>d)) {
  max=b;
}else if ((d>a)&&(d>b)&&(d>c)) {
  max=c;
}
//min
if ((a<b)&&(a<c)&&(a<d)){
  min=a;
} else if ((b<a)&&(b<c)&&(b<d)) {
  min=b;
}else if ((c<a)&&(c<b)&&(c<d)) {
  min=c;
}else if ((d<a)&&(d<b)&&(d<c)) {
  min=d;
}
console.log(`maggiore = ${max}, minore = ${min} `);
