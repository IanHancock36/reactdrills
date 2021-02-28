import React, { Component } from 'react'

export default class TextBox5 extends Component {
    constructor(props){
        super(props)
        this.state = {
            box: ""
        }
    }
    handleChange = event =>{
        this.setState ({box: event.target.value})
    }
    render() {
        return (
            <div>
                <input type ="text" placeholder = "Type Text Here" onChange= {this.handleChange} />
                <h1>Hayyyy</h1>
                <p>{this.state.box}</p>
            </div>
        )
    }
}
