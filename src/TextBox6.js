import React, { Component } from 'react'

export default class TextBox6 extends Component {
    constructor(props){
        super(props)
        this.state = {
            textbox: ''
        }
    }

    handleChange = event => {
        this.setState({textbox: event.target.value})
    }
    render() {
        return (
            <div>
                <input type='text' placeholder ='Hey' onChange ={this.handleChange} />
                <p>{this.state.textbox}</p>
            </div>
        )
    }
}
