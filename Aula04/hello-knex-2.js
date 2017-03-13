const knex = require("./db");

//process.argv[2] = "messi"

if(!process.argv[2]){
    console.log("usage: node hello-knex-2.js <nome>");
    process.exit(0);
}

knex("convidado").insert({
    nomeconvidado: process.argv[2]
},"idconvidado").then((ret) =>{
    console.log(`convidado inserido com a chave ${ret}`);
    process.exit(0);
}).catch((error) =>{
    console.log(error);
    process.exit(1);
});
