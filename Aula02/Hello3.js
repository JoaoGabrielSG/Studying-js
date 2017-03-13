const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.question("digite um valor", (num) => {
    if(isNaN(num)){
        console.log(`${num} nao eh valido`)
    }
    else{
        console.log(`voce digitou o numero ${num}`)
    }
});