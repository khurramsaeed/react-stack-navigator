import React from 'react';
import {
  createStackNavigator,
} from 'react-navigation';
import { Parent } from './src/Parent';
import { Child } from './src/Child';

// Define some screens
const App = createStackNavigator({
  Parent: { screen: Parent },
  Child: { screen: Child },
});

export default App;