console.log ('JS OK');

/* Chiedere all'utente di inserire una parola,

Creare una funzione per capire se quella parola sia palidroma o no. */


const Word = prompt ('Inserisci una parola');
console.log (Word);

function reverseWord (Word){
let reverseWord = '';
    for (let i = Word.length - 1; i >= 0; i--){
        reverseWord += Word[i];
    }
    return reverseWord;
}

const Reverse = reverseWord (Word);
console.log (Reverse);


if (reverseWord = Word){
    console.log (true);
} else {
    console.log (false);
}