
import  { initializeApp } from 'firebase/app';
import { getAnalytics} from 'firebase/analytics'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCby9QIXDpYeWWPnXvEyNQZ2vfYJFntoqg",
  authDomain: "drag-drop-b902f.firebaseapp.com",
  projectId: "drag-drop-b902f",
  storageBucket: "drag-drop-b902f.appspot.com",
  messagingSenderId: "985744388409",
  appId: "1:985744388409:web:aa87ac4069b2c707b938e8",
  measurementId: "G-0ZE7FKT8TB"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
