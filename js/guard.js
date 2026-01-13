firebase.auth().onAuthStateChanged(u=>{
if(!u) location.href='index.html';
});