//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine. (modificato) 

//creo l'array di zucchine
const zucchine = [
    { varietà: 'Nera di Milano', peso: 0.5, lunghezza: 15 },
    { varietà: 'Romanesca', peso: 0.3, lunghezza: 10 },
    { varietà: 'Fiorentina', peso: 0.7, lunghezza: 20 },
    { varietà: 'Siciliana', peso: 0.4, lunghezza: 12 },
    { varietà: 'Striata di Napoli', peso: 0.6, lunghezza: 18 },
    { varietà: 'Tonda di Piacenza', peso: 0.8, lunghezza: 25 },
    { varietà: 'Lunghe fiorentine', peso: 0.5, lunghezza: 22 },
    { varietà: 'Lunga fiorentina', peso: 0.6, lunghezza: 24 },
    { varietà: 'Lunga siciliana', peso: 0.7, lunghezza: 26 },
    { varietà: 'Trombetta d\'Albenga', peso: 0.3, lunghezza: 14 }
];

//setto somma a 0
let sum = 0

//per ogni zuccchina aggiungo a somma
zucchine.forEach((zucchina) => {
    sum += zucchina.peso
    console.log(sum);
})
//loggo somma
console.log(sum);


    



