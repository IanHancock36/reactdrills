import React, { Component } from 'react'

export default class TextBox3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            textbox : ''
        }
    }
    
    handleChange = event => {
        this.setState ({textbox: event.target.value}) // this is going down into in layers to the value that is placed in the state. 
    }
    
    render() {
        return (
            <div>
                
                <input type ="text" placeholder ="type text in here" onChange ={this.handleChange} />  
                <p> </p>
                <h1>Hello world</h1>
            </div>
        )
    }
}


//this.handleChange is passed to the input because the event handler is listening to for the input value to be changed 
// it is starting off as an empty string but once something is typed in it changes the state. 