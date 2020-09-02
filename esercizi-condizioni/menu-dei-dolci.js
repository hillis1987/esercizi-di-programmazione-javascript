/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/
var menu = {
  '1.': 'Tiramisù',
  '2.': 'Torta',
  '3.': 'caso',
  '4.': 'prova'
}
console.log('MENU: ');
console.log(menu);
var scelta = prompt('scegli un dolce');

switch (scelta) {
  case '1':
    console.log('1. Tiramisù');
    break;
  case '2':
    console.log('2. Torta della nonna');
    break;
  case '3':
    console.log('3. Cheesecake alla nutella');
    break;
  case '4':
    console.log('4. Macedonia');
  default:
    console.log('Dolce non disponibile');

}
