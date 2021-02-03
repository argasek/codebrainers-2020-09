import React from "react";
import Plus from "components/exercise/Plus";
import {Container} from "reactstrap/es";
import "./Calculator.scss";
import {BiMinus, BiPlus,} from "react-icons/bi";
import {FaAsterisk} from "react-icons/fa";
import {BsSlash} from "react-icons/bs";


class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      outcome: 0,
      showOutcome:0,
      numA: 0,
      numB: 0,
    }
  }

  handleA = (event) => {
    const numA = event.target.value;
    this.setState({
      numA: numA,
    });
  };
  handleB = (event) => {
    const numB = event.target.value;
    this.setState({
      numB: numB,
    });
  };
  handleSum = (event) => {
    const numA = this.state.numA;
    const numB = this.state.numB;
    this.setState({
      outcome: parseInt(numA) + parseInt(numB),
    })
  }
   handleMinus = (event) => {
    const numA = this.state.numA;
    const numB = this.state.numB;
    this.setState({
      outcome: parseInt(numA) - parseInt(numB),
    })
  }
   handleMultiply = (event) => {
    const numA = this.state.numA;
    const numB = this.state.numB;
    this.setState({
      outcome: parseInt(numA) * parseInt(numB),
    })
  }
  handleDivide = (event) => {
    const numA = this.state.numA;
    const numB = this.state.numB;
    if(this.state.numB===0){
      this.setState({
        outcome:"You can not divide by zero!",
      });
    }else{
       this.setState({
      outcome: parseInt(numA) / parseInt(numB),
    });
    }

  }
  handleShow = (event)=>{
    this.setState({
      showOutcome: this.state.outcome,
    })
  }

  render() {
    // const numA = this.state.numA;
    // const numB = this.state.numB;
    const showOutcome = this.state.showOutcome;

    return (
            <Container>
              <div className='calc-wrapper'>
                <div className="calc-left-side">
                  <div className='inputs-wrapper'>
                    <input onChange={this.handleA} className='inputA' placeholder="enter a number"/>
                    <input onChange={this.handleB} className="inputB" placeholder="enter a number"/>
                  </div>
                  <div className="outcome-tab">
                    {showOutcome}
                  </div>
                </div>
                <div className='vertical'></div>
                <div className="calc-right-side">
                  <div className='actions'>
                    <button onClick={this.handleSum} ><BiPlus/></button>
                    <button onClick={this.handleMinus}><BiMinus/></button>
                    <button onClick={this.handleMultiply}><FaAsterisk/></button>
                    <button onClick={this.handleDivide}><BsSlash/></button>
                  </div>

                  <button onClick={this.handleShow} className="enter">Enter</button>
                </div>
              </div>
            </Container>
    )
  }
}

export default Calculator;