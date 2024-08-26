import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../hooks/useAuth';
import { db } from '../../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import PizzaProgressBar from '../../components/PizzaProgressBar';

export default function ClientDashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [purchasedPizzas, setPurchasedPizzas] = useState(0);
  const [freeRewards, setFreeRewards] = useState(0);

  useEffect(() => {
    const fetchClientInfo = async () => {
      if (user) {
        const docRef = doc(db, 'clients', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setPurchasedPizzas(data.purchases || 0);
          setFreeRewards(data.freeRewards || 0);
        }
      }
    };

    fetchClientInfo();
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tableau de bord Client</Text>
      <Text style={styles.subtitle}>Bienvenue, {user?.email}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Pizzas achetées : {purchasedPizzas}</Text>
        <Text style={styles.infoText}>Récompenses disponibles : {freeRewards}</Text>
      </View>

      <PizzaProgressBar purchasedPizzas={purchasedPizzas % 9} totalNeeded={9} />

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('/client/qr-display')}
      >
        <Text style={styles.buttonText}>Afficher mon QR Code</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});