import React, { Component } from 'react'

export default class TextBox extends Component {
    constructor(props){
        super(props); 
        this.state ={
            value: ""
         }
    }
    handleChange = event => {
        console.log(event.target)
        this.setState({value: event.target.value});
       console.log(this.state.text)
        
    }



    render() {
        return (
            <div>
                
                <input type ="text" 
                placeholder=" Type text in here" 
               
                 onChange={this.handleChange}/>
               <p>{this.state.value}</p>
            </div>
        )
    }
}

