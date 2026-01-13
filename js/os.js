function criarOS(){
db.collection('os').add({
modelo:modelo.value,
placa:placa.value,
status:'Aguardando',
criado:new Date()
}).then(()=>{
alert('OS criada');
location.href='dashboard.html';
});
}