// firebase-config.js - CREDENCIALES DE CRIS INTERIORS

const firebaseConfig = {
  apiKey: "AIzaSyDoO3x3i8OpfJbdEisa07vyPRCwN7eXfDE",
  authDomain: "crisinteriors-web.firebaseapp.com",
  projectId: "crisinteriors-web",
  storageBucket: "crisinteriors-web.firebasestorage.app",
  messagingSenderId: "794081781774",
  appId: "1:794081781774:web:b2b548f920a085bc09745f"
};

// INICIALIZAR FIREBASE (Modo Compatibilidad)
// Esto conecta tu página con la nube usando las claves de arriba
firebase.initializeApp(firebaseConfig);

// Exportamos las herramientas para usarlas en otros archivos
const auth = firebase.auth();      // Para el Login
const db = firebase.firestore();   // Para guardar datos