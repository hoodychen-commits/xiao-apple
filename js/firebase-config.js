// =============================================
// Firebase 設定 — 小蘋果團購
// =============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzeQ1ADRPemmLT7RtU7_SgbcfRtUJNK0M",
  authDomain: "xiao-apple-6b426.firebaseapp.com",
  projectId: "xiao-apple-6b426",
  storageBucket: "xiao-apple-6b426.firebasestorage.app",
  messagingSenderId: "480841867634",
  appId: "1:480841867634:web:33fad2687b033314f5bdeb",
  measurementId: "G-G045P0DXLW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };

