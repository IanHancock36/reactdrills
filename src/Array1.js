import React, {Component} from 'react';
import './App.css';



export default class Array1 extends Component {
  constructor(props){
    super(props)

    this.state ={
      food: ['pizza','pizza2','ice cream','sushi']
    }
  }
  render() {
    let foodsToDisplay = this.state.food.map((elements,index)=> {
      return <h2 key= {index}>{elements}</h2>
    })
    
    
    return (
      <div className = "Array1">
        {foodsToDisplay}
      </div>
    )
  }
}




//Create an app where there is an array of data on state that is 
//then shown on the DOM as a list. The array of data can be as simple 
//as an array of strings. The list can be as simple as a list of `<h2>` elements.