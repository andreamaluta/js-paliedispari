function randomComputer(){
    let num = Math.floor(Math.random()*5 + 1)
    return num;
}

function sum(a,b){
    return a+b;
}

function isEven(a){
    if(a % 2 == 0){
        return true;
    }else{
        return false;
    }
}

function winner(choice, even){
    if(even && choice=="pari"){
        console.log("l'utente ha vinto");
    }else if(!even && choice=="dispari"){
        console.log("l'utente ha vinto");
    }else{
        console.log("Il computer ha vinto");
    }
}

let userChoice = prompt("Scegli se vuoi pari o dispari");
console.log(userChoice);
let userNum = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(userNum);

let computerNum = randomComputer();
console.log(computerNum);

let somma = sum(userNum, computerNum);
console.log(somma);

winner(userChoice, isEven(somma));
