var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/+fono';

MongoClient.connect(servidor, function(erro, db){
  if(erro) 
      console.log("Erro ao estabelecer conexão: "+ erro);
  else
      console.log("Conexão estabelecida com sucesso!");

  db.close();
});