import React, { Component } from 'react'

 class ClassClick extends Component {

    clickHandler(){
        console.log('Clicky the button')
    
 }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick

// this is a class component 
// this is adding a click event in a class Compomnent
// go back and re read the class vs functional components. 