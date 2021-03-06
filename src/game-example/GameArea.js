
import React, {Component} from 'react';
import {styles} from "./styles";
export default class GameArea extends Component {

  componentDidMount(){
      this.props.initGame(this.canvas);
  }
  render(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    

    return(
        <canvas style={styles.canvas} width={w} height={h} ref={canvas=>{
                this.canvas=canvas;
        }
      }/>
    );
  }
}
