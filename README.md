# Pizza Fidélité App

## Description

Pizza Fidélité est une application mobile développée avec Expo React Native, conçue pour gérer un programme de fidélité pour une pizzeria. Elle permet aux clients de gagner des points lors de leurs achats et aux administrateurs de gérer les récompenses.

## Fonctionnalités

- Authentification des utilisateurs (clients et administrateurs)
- Génération et scan de QR codes pour les achats
- Suivi des points de fidélité des clients
- Tableau de bord client avec historique des achats et récompenses
- Interface admin pour scanner les QR codes et valider les achats
- Système de récompenses (par exemple, une pizza gratuite tous les 9 achats)

## Technologies utilisées

- Expo React Native
- TypeScript
- Firebase (Authentication et Firestore)
- Expo Router pour la navigation
- React Native QR Code generator et scanner

## Prérequis

- Node.js (version 12 ou supérieure)
- npm ou yarn
- Expo CLI (`npm install -g expo-cli`)
- Un compte Firebase

## Installation

1. Clonez le dépôt :
   ```
   git clone https://github.com/votre-username/pizza-fidelite-app.git
   cd pizza-fidelite-app
   ```

2. Installez les dépendances :
   ```
   npm install
   ```
   ou
   ```
   yarn install
   ```

3. Configurez Firebase :
   - Créez un projet Firebase sur [Firebase Console](https://console.firebase.google.com/)
   - Ajoutez une application web à votre projet Firebase
   - Copiez les informations de configuration
   - Créez un fichier `config/firebase.ts` et ajoutez vos informations de configuration

4. Lancez l'application :
   ```
   npx expo start
   ```

## Structure du projet

```
PizzaLoyaltyApp/
│
├── app/                  # Écrans de l'application
├── components/           # Composants réutilisables
├── config/               # Configuration (Firebase, etc.)
├── constants/            # Constantes de l'application
├── hooks/                # Hooks personnalisés
├── services/             # Services (base de données, etc.)
├── utils/                # Fonctions utilitaires
├── assets/               # Images, polices, etc.
│
├── App.tsx               # Point d'entrée de l'application
├── app.json              # Configuration Expo
├── babel.config.js       # Configuration Babel
├── package.json          # Dépendances et scripts
└── tsconfig.json         # Configuration TypeScript
```

## Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.

## Contact

Votre Nom - [@votre_twitter](https://twitter.com/votre_twitter) - email@example.com

Lien du projet : [https://github.com/votre-username/pizza-fidelite-app](https://github.com/votre-username/pizza-fidelite-app)