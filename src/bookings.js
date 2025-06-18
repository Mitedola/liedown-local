// bookings.js
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase';

// Add new booking
export async function createBooking(data) {
  const docRef = await addDoc(collection(db, 'bookings'), data);
  return docRef.id;
}

// Fetch all bookings
export async function getBookings() {
  const snapshot = await getDocs(collection(db, 'bookings'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
