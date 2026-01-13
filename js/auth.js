function login(){
firebase.auth().signInWithEmailAndPassword(email.value,senha.value)
.then(()=>location.href='dashboard.html')
.catch(e=>alert(e.message));
}