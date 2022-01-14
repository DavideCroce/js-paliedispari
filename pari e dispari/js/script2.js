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
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const CpuNumb = rndNumb(1, 5);
console.log(CpuNumb);

const sum = CpuNumb + Numb;
console.log(sum);

if( sum % 2 === 0){
    console.log('La somma è pari');
}else{
    console.log('La somma è dispari');
}

if(sum % 2 === 0 || Numb % 2 === 0) {
    console.log('Hai vinto!');
}else if (sum % 2 !== 0 || Numb % 2 !== 0){
    console.log('Hai vinto!');
}else if (sum % 2 === 0 || CpuNumb % 2 === 0){
    console.log('Hai perso! la Cpu ti ha battuto!');
}else{
    console.log('Hai perso! la Cpu ti ha battuto!')
}