import { useRouter } from 'expo-router';

export const useCustomNavigation = () => {
  const router = useRouter();

  const navigateToHome = () => router.replace('/');
  const navigateToLogin = () => router.replace('/login');
  const navigateToRegister = () => router.push('/register');
  const navigateToDashboard = () => router.replace('/(tabs)');
  const navigateToQRDisplay = () => router.push('/client/qr-display');

  return {
    navigateToHome,
    navigateToLogin,
    navigateToRegister,
    navigateToDashboard,
    navigateToQRDisplay,
  };
};