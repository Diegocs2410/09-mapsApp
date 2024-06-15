import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import StackNavigator from './presentation/navigation/StackNavigatos';

export default function MapsApp() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
