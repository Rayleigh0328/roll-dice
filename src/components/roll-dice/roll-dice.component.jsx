import React, { Component } from 'react';
import {Dice} from '../dice/dice.component';
import "./roll-dice.styles.css";

class RollDice extends Component{

  static defaultProps = {
    numberOfDice : 2, 
    animationDuration: 1000, 
  }

  constructor(props){
    super(props);

    this.state= {
      dices : this.generateRandomArray(this.props.numberOfDice),
      isRolling : false,
    };
  }

  generateRandomInt = (ub) => {
    return Math.floor(Math.random() * ub) + 1;
  }

  generateRandomArray = (len) => {
    var result = [];
    while (result.length < len){
      result.push(this.generateRandomInt(6));
    }
    return result;
  }

  roll = (e) => {
    this.setState({
      dices : this.generateRandomArray(this.props.numberOfDice),
      isRolling : true
    });
    setTimeout(
      () => this.setState({isRolling : false}), 
      this.props.animationDuration
    );
  }

  render(){
    let buttonText = (this.state.isRolling ? "Rolling..." : "click to roll");
    let buttonClass = (this.state.isRolling? "RollDice-rolling":"RollDice-to-roll");
    return (
      <div className="RollDice">
        <div className="DiceContainer">
        {this.state.dices.map( (v,i) => 
          <Dice 
            key={i} 
            face={v} 
            animationDuration={this.props.animationDuration}
            isRolling={this.state.isRolling}
          />
        )}
        </div> 
        <button 
          onClick={this.roll} 
          className = {`RollDice ${buttonClass}`}
          disabled = {this.state.isRolling}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

export { RollDice };

