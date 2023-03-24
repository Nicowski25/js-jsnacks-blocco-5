//scrivi una funzione che accetti 3 argomenti: un array e due numeri ('a' più piccolo di 'b' e b grande al massimo quanto il numero di elementi dell'array).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra 'a' e 'b'

//creo la funzione che crea i 3 argomenti 
//faccio creare l'array
//faccio inserire b che sia minore di array.len
//faccio inserire a che sia minore di b
//ritorno un nuovo array con le posizioni comprese tra a e b

let arrayProva = ['nico', 'simo', 'fabio', 'luca', 'tizio', 'pippo', 'pluto', 'mario']
console.log(arrayProva.length);

function arrayBetween(lista) {
    let b = Number(prompt('inserisci un numero minore di ' + lista.length))
    while (b > lista.length) {
        let b = Number(prompt('reinserisci il numero'))
        console.log(b);
    }
    let a = Number(prompt('inserisci un numero minore di ' + b))
    while (a >= b) {
        let a = Number(prompt('reinserisci il numero'))
        console.log(a);
    }
    let newLista = [];
    for (let i = a; i <= b; i++) {
        newLista.push(i);
    }
    console.log(newLista);
}

console.log(arrayBetween(arrayProva));

