// messagesRealtime.js
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';

// Listen to messages in real-time
export function listenToMessages(callback) {
  const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));
  return onSnapshot(q, (snapshot) => {
    const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(msgs);
  });
}

// Send a message
export async function sendMessage(data) {
  return await addDoc(collection(db, 'messages'), {
    ...data,
    timestamp: new Date()
  });
}
