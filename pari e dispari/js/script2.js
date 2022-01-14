console.log('JS OK');

/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const PorD = prompt ('Pari o Dispari?');
const Numb = parseInt(prompt ('Scegli un numero tra 1 e 5'));

console.log(PorD);
console.log(Numb);


function rndNumb(min, max){
    return Math.floor(Math.random() * (min - max)) + min;
}

const CpuNumb = rndNumb(1, 5);
console.log(CpuNumb);