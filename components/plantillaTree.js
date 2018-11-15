import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button, Image, } from 'react-native';
import { Icon } from 'react-native-elements';
import {
    createStackNavigator,
} from 'react-navigation';

export default class TreeGame extends React.Component {
constructor(props){
    super(props);
    this.state = {
    gameState: [
        [0,0,0],
        [0,0,0],
        [0,0,0]
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
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ],
    currentPlayer: 1,
    currentIcon: 'x',
    });
}

getWinner = () => {
    const NUM_TILES = 3;
    var allOver = 0;
// 1: player  1 is the winner; -1: player 2 is the winner; 2: nobody win
// 0: vertical game; 1: horizontal game; 2: diagonal left; 3: diagonal rigth; 4: nobody win 
    var arr = this.state.gameState;
    var sum;
    for (var i=0;i<NUM_TILES; i++){
        sum = arr[i][0]+arr[i][1]+arr[i][2];
        if(sum == 3) {return [1,1];}
        else if(sum == -3) {return [-1,1];}
    }

    for (var i=0;i<NUM_TILES; i++){
        sum = arr[0][i]+arr[1][i]+arr[2][i];
        if(sum == 3) {return [1,0];}
        else if(sum == -3) {return [-1,0];}
    }

    sum = arr[0][0] +arr[1][1] + arr[2][2];
    if(sum ==3) {return [1,2];}
    else if(sum == -3) {return [-1,2];}

    sum = arr[2][0] +arr[1][1] + arr[0][2];
    if(sum ==3) {return [1,3];}
    else if(sum == -3) {return [-1,3];}

    for (var i=0; i<NUM_TILES;i++){
    for (var j=0; j<NUM_TILES; j++){
        if(arr[i][j] == 1 || arr[i][j]==-1){
            allOver += 1;
            if (allOver == 9) {return [2,4];}
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
        case 1:return <Image style={{width: 70, height: 70}} source={require('../assets/ardilla.png')} /> // <Icon name = "close" style= {styles.tileX}></Icon>;
        case -1:return <Image style={{width: 70, height: 70}} source={require('../assets/mazo.png')} /> // <Icon name = "check" style= {styles.tileO}></Icon>;
        default:return <View />;
    }
}
static navigationOptions = ({navigation}) => ({
});
    render() {
    return (
        <View style={styles.container}>
        <Text>Wacka Molet Tap!!</Text>
        <View style = {{paddingTop: 10}}></View>
        <Text>Jugador en turno: {this.state.currentPlayer}</Text>
        <View style = {{paddingTop: 10}}></View>
        <Text>Icono en turno: {this.state.currentIcon}</Text>
        <View style = {{paddingTop: 5}}></View>
        <View style = {{flexDirection: "row"}}>
            <TouchableOpacity onPress = {() => this.onTilePress(0,0)} style = {[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0}]}>
                {this.renderIcon(0,0)}
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => this.onTilePress(0,1)} style = {[styles.tile, { borderTopWidth: 0}]}>
            {this.renderIcon(0,1)}
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => this.onTilePress(0,2)} style = {[styles.tile, { borderTopWidth: 0, borderRightWidth: 0}]}>
            {this.renderIcon(0,2)}
            </TouchableOpacity>
        </View>
        <View style = {{flexDirection: "row"}}>
            <TouchableOpacity onPress = {() => this.onTilePress(1,0)} style = {[styles.tile, { borderLeftWidth: 0}]}>
            {this.renderIcon(1,0)}
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => this.onTilePress(1,1)} style = {[styles.tile, { }]}>
            {this.renderIcon(1,1)}
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => this.onTilePress(1,2)} style = {[styles.tile, { borderRightWidth: 0}]}>
            {this.renderIcon(1,2)}
            </TouchableOpacity>
        </View>
        <View style = {{flexDirection: "row"}}>
            <TouchableOpacity onPress = {() => this.onTilePress(2,0)} style = {[styles.tile, { borderBottomWidth: 0, borderLeftWidth: 0}]}>
            {this.renderIcon(2,0)}
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => this.onTilePress(2,1)} style = {[styles.tile, { borderBottomWidth: 0}]}>
            {this.renderIcon(2,1)}
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => this.onTilePress(2,2)} style = {[styles.tile, { borderBottomWidth: 0, borderRightWidth: 0}]}>
            {this.renderIcon(2,2)}
            </TouchableOpacity>
        </View>
        <View style = {{paddingTop: 20}}></View>
        <Button title= "New Game" onPress = {this.OnNewGamePress} />
        <View style = {{paddingTop: 20}}></View>
        <Button title= "Go to four Game"
        onPress= {() => {this.props.navigation.navigate('FourGame');}}/>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tile: {
        borderWidth: 1,
        width: 80,
        height: 80,
    },
    tileX: {
        justifyContent: 'center',
        fontSize:  50,
    },
    tileO: {
        justifyContent: 'center',
        fontSize:  40,
    }
}); 