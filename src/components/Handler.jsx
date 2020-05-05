import React, { Component } from 'react';
class Handler extends Component {
    handleClick=()=>{
        console.log("I am in click method");
    }
    render() { 
        return ( 
            <button onClick= {this.handleClick}>
                Click
            </button>
         );
    }
}
 
export default Handler;