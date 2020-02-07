// Add BandInput component
import React, { Component } from "react";

class BandInput extends Component {
  
  this.state = {
    name: ''
  }

  // const handleOnSubmit = () =>{

  // }

  const handleOnChange= (event)=>{
    this. event.target.value
    
  }
  
  render() {
    return (
      <div>
        <form >
          <input type= 'text' onChange={this.handleOnChange}></input>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
}

export default BandInput;
