import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 164,
  height: 164
};  //Optional, Konstate "logo" ist ersetzbar durch die beiden Pfade in 18 und 19. 

function HomeScreen() {
return (
  <ScrollView>
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./pipe_fist.png')} />
      <Text>Lak Abdulkerim!</Text>
      <Image style={{width: 400, height: 400, resizeMode: 'stretch', alignItems: 'stretch'}} source={require('./ihrewerbung.jpg')} />  
      </View>
  </ScrollView>
)
}

function AnfahrtScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Anfahrt!</Text>
    </View>
  )
}

function KontaktScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Kontakt!</Text>
    </View>
  )
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}



const Tab = createBottomTabNavigator();



export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Anfahrt" component={AnfahrtScreen} />
        <Tab.Screen name="Kontakt" component={KontaktScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});