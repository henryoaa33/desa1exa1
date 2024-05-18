import React from 'react';
import { RecipesProvider } from './src/context/RecipesContext';
import AppNavigator from './src/navigation/NavigationContainer';

const App = () => {
  return (
    <RecipesProvider>
      <AppNavigator />
    </RecipesProvider>
  );
};

export default App;

