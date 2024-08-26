import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PizzaProgressBarProps {
  purchasedPizzas: number;
  totalNeeded: number;
}

export default function PizzaProgressBar({ purchasedPizzas, totalNeeded }: PizzaProgressBarProps) {
  const progress = (purchasedPizzas / totalNeeded) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${progress}%` }]} />
      </View>
      <Text style={styles.text}>
        {purchasedPizzas} / {totalNeeded} pizzas
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  progressBar: {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#ff6347', // Couleur tomate pour la pizza
  },
  text: {
    marginTop: 5,
    fontSize: 16,
  },
});