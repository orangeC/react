import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Game extends Component {
  render(){
    let styles={
      root:{
        display:"flex",
        justifyContent:"space-around"
      }
    }
    return (
      <div className="gameRoot">
        <div style={styles.root}>
          <a href="https://orangec.github.io/palette/" target="_blank"><RaisedButton label="五子棋"  /></a>
          <a href="https://orangec.github.io/palette/" target="_blank"><RaisedButton label="你画我猜" primary={true}  /></a>
          <RaisedButton label="大鱼吃小鱼" secondary={true}  />
        </div>
      </div>
      )
  }
}

export default Game;