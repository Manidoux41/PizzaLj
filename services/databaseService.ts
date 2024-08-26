import { doc, getDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../constants/FirebaseConfig';

export const updateClientPurchases = async (clientId: string) => {
  const clientRef = doc(db, 'clients', clientId);
  const clientSnap = await getDoc(clientRef);

  if (clientSnap.exists()) {
    const currentPurchases = clientSnap.data().purchases || 0;
    const newPurchases = currentPurchases + 1;

    await updateDoc(clientRef, {
      purchases: increment(1)
    });

    if (newPurchases % 9 === 0) {
      await updateDoc(clientRef, {
        freeRewards: increment(1)
      });
    }

    return newPurchases;
  } else {
    throw new Error('Client non trouvé');
  }
};

export const getClientInfo = async (clientId: string) => {
  const clientRef = doc(db, 'clients', clientId);
  const clientSnap = await getDoc(clientRef);

  if (clientSnap.exists()) {
    return clientSnap.data();
  } else {
    throw new Error('Client non trouvé');
  }
};