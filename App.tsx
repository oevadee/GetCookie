/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from './src/navigation/types';
import {Navigation} from './src/navigation';

export type StackNavigation = NavigationProp<RootStackParamList>;

function App(): React.JSX.Element {
  return <Navigation />;
}

export default App;
