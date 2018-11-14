import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button, } from 'react-native';
import { Icon } from 'react-native-elements'

export default class FourGame extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gameState: [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
      ],
      currentPlayer: 1,
      currentIcon: 'x',
    }
  }
  componentDidMount() {
    this.initializeGame();
  }

  initializeGame = () => {
    this.setState({gameState:
    [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
    ],
    currentPlayer: 1,
    currentIcon: 'x',
  });
  }

  getWinner = () => {
    const NUM_TILES = 4;
    var allOver = 0;
// 1: player  1 is the winner; -1: player 2 is the winner; 2: nobody win
// 0: vertical game; 1: horizontal game; 2: diagonal left; 3: diagonal rigth; 4: nobody win 
    var arr = this.state.gameState;
    var sum;
    for (var i=0;i<NUM_TILES; i++){
      sum = arr[i][0]+arr[i][1]+arr[i][2]+arr[i][3];
      if(sum == 4) {return [1,1];}
      else if(sum == -4) {return [-1,1];}
    }

    for (var i=0;i<NUM_TILES; i++){
      sum = arr[0][i]+arr[1][i]+arr[2][i]+arr[3][i];
      if(sum == 4) {return [1,0];}
      else if(sum == -4) {return [-1,0];}
    }

    sum = arr[0][0] +arr[1][1] + arr[2][2]+arr[3][3];
    if(sum ==4) {return [1,2];}
    else if(sum == -4) {return [-1,2];}

    sum = arr[3][0] +arr[2][1] + arr[1][2]+arr[0][3];
    if(sum ==4) {return [1,3];}
    else if(sum == -4) {return [-1,3];}

    for (var i=0; i<NUM_TILES;i++){
      for (var j=0; j<NUM_TILES; j++){
        if(arr[i][j] == 1 || arr[i][j]==-1){
          allOver += 1;
          if (allOver == 16) {return [2,4];}
        }
      }
    } 

    return 0;
  }
  onTilePress = (row,col) => {
    var value = this.state.gameState[row][col];
    if (value !=0) {return;}

    var currentPlayer = this.state.currentPlayer;
    var currentIcon = this.state.currentIcon;
    var arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({gameState: arr});

    var nextPlayer = (currentPlayer == 1) ? -1 : 1;
    this.setState({currentPlayer: nextPlayer});
    var nexIcon = (currentIcon == 'x' ? 'o': 'x'); 
    this.setState({currentIcon: nexIcon});

    var winner = this.getWinner();
    if (winner[0] == 1){
      switch (winner[1]) {
        case 0:
            {
              Alert.alert("Player 1 with x icon is the winner. Vertical winner");
              this.initializeGame();
            }
            break;
        case 1:
        {
          Alert.alert("Player 1 with x icon is the winner. Horizontal winner");
          this.initializeGame();
        }
        break;
        case 2:
        {
          Alert.alert("Player 1 with x icon is the winner. Diagonal Left winner");
          this.initializeGame();
        }
        break;
        case 3:
        {
          Alert.alert("Player 1 with x icon is the winner. Diagonal rigth winner");
          this.initializeGame();
        }
        break;
    }
    } else if (winner[0] == -1) {
      switch (winner[1]) {
        case 0:
            {
              Alert.alert("Player 2 with o icon is the winner. Vertical winner");
              this.initializeGame();
            }
            break;
        case 1:
        {
          Alert.alert("Player 2 with o icon is the winner. Horizontal winner");
          this.initializeGame();
        }
        break;
        case 2:
        {
          Alert.alert("Player 2 with o icon is the winner. Diagonal Left winner");
          this.initializeGame();
        }
        break;
        case 3:
        {
          Alert.alert("Player 2 with 0 icon is the winner. Diagonal rigth winner");
          this.initializeGame();
        }
        break;
    }
    }
    else if(winner[0] == 2) {
      if(winner[1] == 4) {
      Alert.alert("Oopsi, nadie gano!!!");
      this.initializeGame();
      }
    }
  }

  OnNewGamePress = () => {
    this.initializeGame();
  }

  renderIcon = (row,col) => {
    var value = this.state.gameState[row][col];
    switch (value) {
      case 1:return <Icon name = "close" style= {styles.tileX}></Icon>;
      case -1:return <Icon name = "check" style= {styles.tileO}></Icon>;
      default:return <View />;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Wacka Molet Tap!!</Text>
        <Text>Jugador en turno: {this.state.currentPlayer}</Text>
        <Text>Icono en turno: {this.state.currentIcon}</Text>
        <View style = {{flexDirection: "row"}}>
          <TouchableOpacity onPress = {() => this.onTilePress(0,0)} style = {[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0}]}>
            {this.renderIcon(0,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.onTilePress(0,1)} style = {[styles.tile, { borderTopWidth: 0}]}>
          {this.renderIcon(0,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.onTilePress(0,2)} style = {[styles.tile, { borderTopWidth: 0}]}>
          {this.renderIcon(0,2)}
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.onTilePress(0,3)} style = {[styles.tile, { borderTopWidth: 0, borderRightWidth: 0}]}>
          {this.renderIcon(0,3)}
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: "row"}}>
          <TouchableOpacity onPress = {() => this.onTilePress(1,0)} style = {[styles.tile, { borderLeftWidth: 0}]}>
          {this.renderIcon(1,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.onTilePress(1,1)} style = {[styles.tile, { }]}>
          {this.renderIcon(1,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.onTilePress(1,2)} style = {[styles.tile, { }]}>
          {this.renderIcon(1,2)}
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.onTilePress(1,3)} style = {[styles.tile, { borderRightWidth: 0}]}>
          {this.renderIcon(1,3)}
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: "row"}}>
          <TouchableOpacity onPress = {() => this.onTilePress(2,0)} style = {[styles.tile, { borderLeftWidth: 0}]}>
          {this.renderIcon(2,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.onTilePress(2,1)} style = {[styles.tile, { }]}>
          {this.renderIcon(2,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.onTilePress(2,2)} style = {[styles.tile, { }]}>
          {this.renderIcon(2,2)}
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.onTilePress(2,3)} style = {[styles.tile, { borderRightWidth: 0}]}>
          {this.renderIcon(2,3)}
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: "row"}}>
          <TouchableOpacity onPress = {() => this.onTilePress(3,0)} style = {[styles.tile, { borderBottomWidth: 0, borderLeftWidth: 0}]}>
          {this.renderIcon(3,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.onTilePress(3,1)} style = {[styles.tile, { borderBottomWidth: 0}]}>
          {this.renderIcon(3,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.onTilePress(3,2)} style = {[styles.tile, { borderBottomWidth: 0}]}>
          {this.renderIcon(3,2)}
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.onTilePress(3,3)} style = {[styles.tile, { borderBottomWidth: 0, borderRightWidth: 0}]}>
          {this.renderIcon(3,3)}
          </TouchableOpacity>
        </View>
        <View style = {{paddingTop: 50}}></View>
        <Button title= "New Game" onPress = {this.OnNewGamePress} />
        <Button onPress= {() => this.props.navigator.pop()}>Go back tree game</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tile: {
    borderWidth: 2,
    width: 100,
    height: 100,
  },
  tileX: {
    color: "red",
    fontSize:  80,
  },
  tileO: {
    color: "green",
    fontSize:  80,
  }
});
