"use strict"
const knex = require("./db");

process.argv[2] = 2;

if(!process.argv[2]){
  console.log("usage: node hello-knex-4.js <id>");
  process.exit(0);
}

let id = process.argv[2];

knex("convidado").del((object) =>{
    console.log(object);
}).where({
    idconvidado: id
}).then((value) =>{
    console.log(`esse id foi deletado ${id}`)
    process.exit(0);
}).catch((error) =>{
    console.log(error);
    process.exit(1);
})