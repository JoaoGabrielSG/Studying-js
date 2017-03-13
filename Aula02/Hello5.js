const readline = require("readline");
const salvar = require("./salvaararquivo");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

nomes = [];

function leianome(count) {
    if(count--){
        rl.question("Digite um nome: ", (nome) => {
            nomes.push(nome);
            leianome(count);
        });
    }
    salvar.salvar("nomes2", nomes);
}

leianome(3);