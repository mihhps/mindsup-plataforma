// src/services/firebase.js

// 1. Importe as funções base
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// 2. Importe os serviços adicionais que você vai usar
import { getFirestore } from "firebase/firestore"; // <-- Adicionei o Firestore
import { getAuth } from "firebase/auth"; // <-- Adicionei o Auth (Autenticação)

// Sua configuração copiada:
const firebaseConfig = {
  apiKey: "AIzaSyC0DmfdSdi0u3LB1OkQ0FNuyvmleQGWnn8",
  authDomain: "mindsup-71ddb.firebaseapp.com",
  projectId: "mindsup-71ddb",
  storageBucket: "mindsup-71ddb.firebasestorage.app",
  messagingSenderId: "116806770429",
  appId: "1:116806770429:web:32e1d9cc1922fd2020e894",
  measurementId: "G-JCLXCM777R",
};

// 3. Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// 4. Inicializa os serviços e os exporta para uso no seu projeto React
export const analytics = getAnalytics(app);
export const db = getFirestore(app); // Exporta o banco de dados
export const auth = getAuth(app); // Exporta o serviço de autenticação

// Opcional: export default app;
