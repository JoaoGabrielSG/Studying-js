const express = require("express");

const app = express();

app.get("/hello", (req,res) => res.send("Ola mundo!"));

app.get("/greet", (req,res) => res.send(`Olá, ${req.query.nome}!`));

app.get("/queryparams", (req,res) => {
  console.log(req.query);
  res.send("Veja no console");
});

app.get("/pathparams/:nome/:time",  (req,res) => {
  res.send("Veja no console");
  console.log(req.params);
  console.log(`Meu nome é ${req.params.nome} e eu sou ${req.params.time} desde sempre`);
});

app.get("/option(/:maybe)?", (req, res) => {
  if(req.params.maybe){
    res.send("call me" + req.params.maybe);
  }else {
    res.send("I just met you");
    console.log(req.params);
  }
});

app.listen(3000);
