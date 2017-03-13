"use strict"
const knex = require("./db");

knex("convidado").select().then((ret) =>{
    console.log("id\t\tnome");
   // console.log(ret.length);
    let tamanho = ret.length;
    while(tamanho--){
        let conv = ret[tamanho];
        console.log(`${conv.idconvidado}\t\t${conv.nomeconvidado}`);
    }
    process.exit(0);
});