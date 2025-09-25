// src/services/firebase.js

// Importa as funções necessárias do SDK do Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Para o banco de dados (dados)
import { getAuth } from "firebase/auth"; // Para autenticação (usuários)
import { getAnalytics } from "firebase/analytics"; // Para métricas (opcional)

// Configuração do Firebase
// ATENÇÃO: Os valores são lidos das variáveis de ambiente
// O prefixo VITE_ é obrigatório para projetos Vite/React
const firebaseConfig = {
  // Chaves de acesso (secretas)
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,

  // Chaves públicas
  appId: "1:116806770429:web:32e1d9cc1922fd2020e894",
  measurementId: "G-JCLXCM777R",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa e exporta os serviços que serão usados em toda a aplicação
export const db = getFirestore(app); // Banco de dados Firestore
export const auth = getAuth(app); // Serviço de Autenticação
export const analytics = getAnalytics(app); // Serviço de Analytics
