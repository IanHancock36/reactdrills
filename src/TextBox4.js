import React, { Component } from 'react'

export default class TextBox4 extends Component {
   constructor(props){
       super(props);
       this.state = {
           value: ""

       }
   }
   handleChange = event => {
       this.setState ({value: event.target.value})
   }
   
    render() {
        return (
            <div>
                <h1>HAYYYYY</h1>
                <input type = "text" placeholder ="Type Here Please" onChange={this.handleChange}/>
                <p>{this.state.value}</p>
            </div>
        )
    }
}
