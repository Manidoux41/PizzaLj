import { Alert } from 'react-native';

export const handleError = (error: any): void => {
  console.error('Une erreur est survenue:', error);
  
  let message = 'Une erreur inattendue est survenue. Veuillez réessayer.';
  
  if (error.code) {
    switch (error.code) {
      case 'auth/user-not-found':
        message = 'Aucun utilisateur trouvé avec cet email.';
        break;
      case 'auth/wrong-password':
        message = 'Mot de passe incorrect.';
        break;
      case 'auth/invalid-email':
        message = 'Adresse email invalide.';
        break;
      // Ajoutez d'autres cas selon les erreurs spécifiques que vous voulez gérer
    }
  }

  Alert.alert('Erreur', message);
};