import React, { useEffect } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';
import { useAuth } from '../hooks/useAuth';

// Vous pouvez importer ici d'autres éléments nécessaires, comme un provider de thème

export default function RootLayout() {
  const { user } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    if (!user && !inAuthGroup) {
      // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
      router.replace('/login');
    } else if (user && inAuthGroup) {
      // Rediriger vers la page d'accueil si l'utilisateur est déjà connecté
      router.replace('/');
    }
  }, [user, segments]);

  return <Slot />;
}