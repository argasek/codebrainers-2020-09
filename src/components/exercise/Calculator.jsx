import React from "react";

class Calculator extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state={
      outcome: 0,
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
  render(){
     const numA = this.state.numA;
    const numB = this.state.numB;
    const outcome = this.state.outcome;
    return(
             <div className='input-box'>
                      <label htmlFor="a">A</label>
                      <input id='a' onChange={this.handleA}/>
                      <label htmlFor="b">B</label>
                      <input id='b' onChange={this.handleB}/>
                      <button
                              onClick={this.handleSum}
                      >wynik:
                      </button>
                      <div className='outcome'>
                        {numA}+{numB}={outcome}
                      </div>


                    </div>
    )
  }
}
export default Calculator;