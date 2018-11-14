import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, 
  View, Navigator, } from 'react-native';
  import treeGame from './components/plantillaTree';
  import fourGame from './components/plantillaFour';

  export default class App extends Component {
    constructor() {
      super()
      this.renderScene = this.renderScene.bind(this);
    }

    renderScene(route) {
      if(route.name === 'treeGame'){
        return <treeGame navigator = {navigator}/>
      } else if(name === 'fourGame') {
        return <fourGame navigator = {navigator}/>
      }
    }
    render() {
      return(
        <Navigator 
          initialRoute = {{name: 'treeGame'}}
          renderScene= {this.renderScene}
        />
      );
    }
  }

  AppRegistry.registerComponent('Routing', () => App);