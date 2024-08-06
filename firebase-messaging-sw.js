importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");

const firebaseConfig = {
    apiKey: "AIzaSyDldahwdahJb1FitgKnRVD4urLORwM-Joc",
    authDomain: "mridunguptainc-a.firebaseapp.com",
    projectId: "mridunguptainc-a",
    storageBucket: "mridunguptainc-a.appspot.com",
    messagingSenderId: "711019594974",
    appId: "1:711019594974:web:40fcd279c4f87fac7eae4f"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();