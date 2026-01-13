function buscar(){
db.collection('os').where('placa','==',busca.value).get().then(s=>{
resultado.innerHTML=s.empty?'Não encontrada':'';
s.forEach(d=>resultado.innerHTML=`OS ${d.id} - ${d.data().status}`);
});
}