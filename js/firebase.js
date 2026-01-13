// COLE AQUI SUAS CHAVES DO FIREBASE
firebase.initializeApp({
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_PROJECT_ID.appspot.com"
});

const db = firebase.firestore();
const storage = firebase.storage();
