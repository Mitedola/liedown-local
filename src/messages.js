// messages.js
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';

// Send a message
export async function sendMessage(data) {
  const docRef = await addDoc(collection(db, 'messages'), {
    ...data,
    timestamp: new Date()
  });
  return docRef.id;
}

// Fetch all messages
export async function getMessages() {
  const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
