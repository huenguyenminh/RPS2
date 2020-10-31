import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({ navigation }) => {
  return (
    <>
    <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
            <Button
              onPress={() => navigation.navigate('article')}
              title="Go to Article"
            />
            <Button
              onPress={() => navigation.navigate('stopWatch')}
              title="Go to StopWatch"
            />
            
            {/* <TouchableOpacity onPress={()=> props.navigation.navigate('List')}>
              <Text>Go to List Demo</Text>
            </TouchableOpacity> */}
        </View>
    </SafeAreaView>
    </>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
