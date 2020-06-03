// Stampa le potenze di 2 fino a 1000

//assegno una base alla potenza
var base_potenza = 2;

//creo una variabile per avvirare il ciclo
var potenza = 0;

//stampo le potenze di 2 fino a quando il risultato è pari a 1000
for (var i = 0; potenza <= 1000 ; i++) {
    console.log(potenza);
    var potenza = Math.pow(base_potenza, i);

}
