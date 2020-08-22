import React,{ Component } from 'react';
import "./dice.styles.css";

class Dice extends Component {

  static spellOut = ["zero", "one", "two", "three", "four", "five", "six"];

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div><i className={`Dice fas fa-dice-${Dice.spellOut[this.props.face]}`}></i></div>
    )
  }
}

export { Dice };