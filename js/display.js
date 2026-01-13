db.collection('os').onSnapshot(s=>{
tabela.innerHTML='<tr><th>OS</th><th>Placa</th><th>Status</th></tr>';
s.forEach(d=>{
const o=d.data();
tabela.innerHTML+=`<tr><td>${d.id}</td><td>${o.placa}</td><td>${o.status}</td></tr>`;
});
});