// // esercizio del pari e dispari
// // genero un numero random compreso tra 1 e 5 per il computer
// function randomComputer(){
//     let num = Math.floor(Math.random()*5 + 1)
//     return num;
// }

// // funzione per fare la somma
// function sum(a,b){
//     return a+b;
// }

// // funzione booleana per controllare se è pari o dispari
// function isEven(a){
//     if(a % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// // funzione che mi permette di decidere se ha vinto il computer o l'utente
// function winner(choice, even){
//     if(even && choice=="pari"){
//         console.log("l'utente ha vinto");
//     }else if(!even && choice=="dispari"){
//         console.log("l'utente ha vinto");
//     }else{
//         console.log("Il computer ha vinto");
//     }
// }

// // faccio scegliere all'utente se vuole pari o dispari
// let userChoice = prompt("Scegli se vuoi pari o dispari");
// console.log(userChoice);
// // faccio scegliere all'utente un numero da 1 a 5
// let userNum = parseInt(prompt("Scegli un numero da 1 a 5"));
// console.log(userNum);
// // uso la funzione per generare random un numero per il computer
// let computerNum = randomComputer();
// console.log(computerNum);

// // uso la funzione per calcolare la somma
// let somma = sum(userNum, computerNum);
// console.log(somma);

// // richiamo la funzione per decidere chi ha vinto
// winner(userChoice, isEven(somma));


// Esercizio palindromo

