const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

var nomes = [];

function leianome(count) {
    if(count--){
        rl.question("Digite o nome: ", (nome) => {
            nomes.push(nome);
            leianome(count);
        });
    }
    else{
        rl.question("Digite o nome do arquivo: ", (nomeArquivo) =>{
            gravaarquivo(nomeArquivo);
        });
    }
}

function gravaarquivo(nomeArquivo){
    for(var i in nomes){
        //Apagando o conteudo do arquivo
        fs.writeFile(nomeArquivo+".txt", "");
        //salvando no arquivo
        fs.appendFile(nomeArquivo+".txt", nomes[i]+"\n", (error) =>{
            console.log(error);
        });
    }
        rl.close();
        console.log("arquivo salvo com sucesso!");
}

leianome(3);