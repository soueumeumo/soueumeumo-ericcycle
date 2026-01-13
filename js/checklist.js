function salvarChecklist(){
const files=[...fotos.files];
Promise.all(files.map(f=>{
const ref=storage.ref('fotos/'+Date.now()+'_'+f.name);
return ref.put(f).then(()=>ref.getDownloadURL());
})).then(urls=>{
db.collection('checklists').add({
modelo:modelo.value,placa:placa.value,km:km.value,ano:ano.value,cor:cor.value,
servicos:servicos.value,erros:erros.value,combustivel:combustivel.value,obs:obs.value,
fotos:urls,criado:new Date()
});
alert('Checklist salvo com fotos');
});
}