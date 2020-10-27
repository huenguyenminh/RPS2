import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, TouchableOpacity
} from 'react-native';

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import * as PublicConst from './Components/RpsComponents/Config';

import HomeScreen from './screen/HomeScreen';
import ArticleScreen from './screen/ArticleScreen';

const {Navigator, Screen} = createStackNavigator();
const App = () => {
  return(
    <NavigationContainer>
      <Navigator initialRouteName={Navigator.app} headerMode="none">
        <Screen name={'app'} component={HomeScreen} initialParams={{}} />
        <Screen name={'article'} component={ArticleScreen} initialParams={{}} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
