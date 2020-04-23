//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente

//chiedo una variabile all'utente
var numero_utente = parseInt(prompt("Inserisci un numero"));

//verifico se l'utente mi abbia inserito un numero e maggiore di zero
if ((isNaN(numero_utente) == false) && (numero_utente > 0)){
    //creo una sequenza pari al numero inserito dall'utente
    for (var i = 1; i <= numero_utente; i++) {
        //stampo il cubo del valore che assume la variabile nel ciclo
        console.log(i * i * i);
    }
} else {
    alert("Non hai inserito un numero valido");
}
