"use strict"
const knex = require("./db");

//process.argv[2] = 1;
//process.argv[3] = "pedro";

if(!process.argv[3]){
  console.log("usage: node hello-knex-3.js <id> <nome>");
  process.exit(0);
}

let id = process.argv[2];
let nome = process.argv[3];

knex("convidado").update({
    nomeconvidado:nome
}).where({
    idconvidado: id
}).then((ret) =>{
    console.log(`convidado ${id} alterado para ${nome}`);
    process.exit(0);
}).catch((error) =>{
    console.log(error);
    process.exit(1);
});