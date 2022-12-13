import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import Routes from './src/Routes'

const App = () => {

  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;