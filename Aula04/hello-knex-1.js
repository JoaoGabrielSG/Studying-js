const knex = require("knex")({
    client: "sqlite3",
    connection: {
        filename: "./hello.sqlite"
    },
    userNullAsDefault: true
});


knex.schema.createTable("convidado", (table) =>{
    table.increments("idconvidado");
    table.string("nomeconvidado");
}).then(() =>{
    console.log("tabela criada");
    process.exit();
}).catch((error =>{
    console.log(error);
    process.exit();
}))