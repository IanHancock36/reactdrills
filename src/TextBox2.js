
import React, { Component } from 'react'

export default class TextBox2 extends Component {
    constructor(props){
        super(props);
     this.state ={
         JoeBiden : "has a way with words  " 
     };
    }
    
    handleChange = event => {
        this.setState({JoeBiden: event.target.value})
    }
    
    
    render() {
        return (
            <div>
               <input type = 'text' placeholder = "Hey Joe" onChange = {this.handleChange}/>
               <p>{this.state.JoeBiden}</p> 
            </div>
        )
    } 
}
