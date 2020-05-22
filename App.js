import React, { Component } from 'react';
import { 
  StyleSheet, Text, View 
} from 'react-native';
import { DrawerNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'
import { Drawer } from 'native-base';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hallo</Text>
    </View>
  );
}

const MyApp = DrawerNavigator(
  {
    Home: {
      HomeScreen
    }
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

