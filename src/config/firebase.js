
import  { initializeApp } from 'firebase/app';
import { getAnalytics} from 'firebase/analytics'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCCUOS9sSOkVwl9Ij-sfjonNNTJg6BrpYM",
  authDomain: "drag-drop-df898.firebaseapp.com",
  projectId: "drag-drop-df898",
  storageBucket: "drag-drop-df898.appspot.com",
  messagingSenderId: "461436302885",
  appId: "1:461436302885:web:0a5bbeb6fe9a2fa9ec31cc",
  measurementId: "G-67QS893E5H"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
