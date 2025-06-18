// auth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase';

// Signup a new user
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Login user
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Logout user
export function logout() {
  return signOut(auth);
}
