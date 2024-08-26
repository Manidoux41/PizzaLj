import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import QRCodeGenerator from '../../components/QRCodeGenerator';

export default function QRDisplayScreen() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Votre QR Code</Text>
      {user && (
        <>
          <QRCodeGenerator value={user.uid} size={250} />
          <Text style={styles.instructions}>
            Présentez ce code lors de vos achats pour gagner des points de fidélité.
          </Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 30,
  },
});