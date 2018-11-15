import React, { Component } from 'react';
import {StyleSheet, Text, 
  View, } from 'react-native';
  import {
    createStackNavigator,
  } from 'react-navigation';
  import TreeGame from './components/plantillaTree';
  import FourGame from './components/plantillaFour';

  const App = createStackNavigator({
    TreeGame: {screen: TreeGame,
      navigationOptions: ({navigation}) => ({
        title: 'TreeGame',
        headerTitleStyle: {color: "white"},
        headerStyle: {
          backgroundColor: "salmon",
        },
      }),
    },
    FourGame: {screen: FourGame,
      navigationOptions: ({navigation}) => ({
        title: 'FourGame',
        headerTitleStyle: {color: "white"},
        headerStyle: {
          backgroundColor: "pink",
        },
      }),
    },
  });
  export default App;
  