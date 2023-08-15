import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC806xtNm_MMcX1kRWxOZN_p-t_VN2UFAI",
  authDomain: "med-hist-e284d.firebaseapp.com",
  projectId: "med-hist-e284d",
  storageBucket: "med-hist-e284d.appspot.com",
  messagingSenderId: "406241751818",
  appId: "1:406241751818:web:b27c9ba7a0cd5a3a3340f3",
  measurementId: "G-23H1K48X3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);