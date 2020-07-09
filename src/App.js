import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../src/App.css'


class App extends Component {
    constructor(props){
      super(props);
      this.state={
        addedResult:0,
        inputNumbers:0,
      }
    }

     isNumeric =(n) => {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
    addNumbers = () =>{
      var value = document.getElementById('input').value;
      if(value !== ''){
        if(this.isNumeric(value)){
          this.setState({
            addedResult: this.state.addedResult + parseFloat(value),
            inputNumbers: this.state.inputNumbers+' + '+value
          })
          document.getElementById('input').value='';
        }else{
          alert('invalid number');
        }
      }else{
        alert('Please enter some numbers');      }
      
    }

    
  render() {
    return (
      <div >
         <Container>
           <div className="pt-5 d-flex justify-content-center"> 
             <h1 className="title">Addition Of Numbers </h1>
           </div>
           <div className="pt-5 pb-5 d-flex align-content-center justify-content-center">
             <input type="text" id="input"placeholder="Enter the numbers" ></input>
               <Button variant="primary" onClick={(e) => this.addNumbers(e)}>ADD</Button>
            </div>
            <div className="pb-5 d-flex justify-content-center">
              <Button variant="secondary" onClick={() => this.setState({addedResult:0,inputNumbers:0})}>RESET</Button>
            </div>
          <div className="pb-5 d-flex justify-content-center">
            <p className="title">Result of {this.state.inputNumbers} : {this.state.addedResult}</p>
            </div>
            </Container>
      </div>
    );
  }
}

export default App;
