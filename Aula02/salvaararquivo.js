const salvaarq = {
    salvar: (nomearquivo, nomes) =>{
        const fs = require("fs");

        for(var i in nomes){
            fs.appendFile(nomearquivo+".txt", nomes[i]);
        }
    }
};

module.exports = salvaarq;