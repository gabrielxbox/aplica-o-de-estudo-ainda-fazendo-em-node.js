/* inporta as configuraçoes do servidor */
var app = require('./config/server');

/* parametrizar a pporta de escuta */

// atribuindo a
var servidor = app.listen(80, function(){
    console.log('servidor online');
})

// criando o metodo socket aio para a porta 8080

 var io = require('socket.io').listen(servidor);
// torna a variavel aio global tem que usar essa função
app.set('io', io );

 // crair  a conexao do web socket
//on('nome, function(data{}))
// fica ouvindo pedidos de execuçao
io.on('connection', function(socket){
console.log('usuario conectado');
// mostra quando o cliende sair do shat
socket.on('disconnect', function(){
    console.log('usuario desconectou');
});

// emit('nome, {})
//pedito para execultar alguma açao
//dialogo
socket.on('msgParaServidor',function(data){
socket.emit('msGParaCliente',{apeldo: data.apelido, mensagem:data.mensagem});

socket.broadcast.emit(
    'msgParaCliente',
    {apeldo: data.apeldo, mensagem: data.mensagem}
);
// participantes
// parseint() é para passa valores de variaves
if(parseint(data.apelido_atualizado_nos_clientes) == 0){
socket.emit('participantesParaCliente',{apelido: data.apeldo}
);

socket.broadcast.emit('participantesParaCliente',{apeldo: data.apeldo}
);

}


});

  });

