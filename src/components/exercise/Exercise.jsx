import React from "react";
import './Exercise.scss';
import {contentLongText} from "constants/PlantConstants";




class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInBox: "Default text",
      isToggle: false,
      isToggle2: true,
      isToggle3: false,
      content: 'this text will be changed after clicking a second button',
      outcome:0,
      numA: 0,
      numB: 0,
    }


  }

  handlerContentChange = () => {
    this.setState({
      isToggle2: !this.state.isToggle2,

    })
  }

  handlerTextChange = () => {
    this.setState({
      textInBox: "This is added by click text",
      isToggle: !this.state.isToggle,
    })
  }
  handleSpin = () => {
    this.setState({
      isToggle3: !this.state.isToggle3,
    })
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
  handleSum = (event)=>{
    const numA = this.state.numA;
    const numB =this.state.numB;
    this.setState({
      outcome:parseInt(numA)+parseInt(numB),
    })
  }


  render() {
    const textInBox = this.state.textInBox;
    const isToggle = this.state.isToggle;
    const isToggle2 = this.state.isToggle2;
    const isToggle3 = this.state.isToggle3;
    const defContent = this.state.content;
    const longText = contentLongText;
    const toggleFirstOn = "Clicked ON";
    const toggleFirstOFF = "Clicked OFF";
    const numA = this.state.numA;
    const numB = this.state.numB;
    const outcome = this.state.outcome;
    // const outcome = this.state.outcome;


    return (
            <>

              <div>
                <p> This is a page created just for practice.</p>
                <p>It has been created with following steps</p>
                <ol>
                  <li>Create new directory of the new page.</li>
                  <li>Create path to this page on the Routes.jsx, where all paths are defined</li>
                  <li>Import the path to Container site where all paths are rendered using Switch,<br/> and also in
                    the render section add this component so it could be rendered
                  </li>
                </ol>
                <p>Below section displays just some of my code I practice... </p>
              </div>
              <div className='wrapper'>
                <div className={isToggle3 ? "box" : "box spin"}>
                  <p>this a text in box added by onclick handler and displays only when page is
                    reloaded: {textInBox}</p>
                  <p> text from toggle : {isToggle ? toggleFirstOn : toggleFirstOFF}</p>
                </div>
                <div className='input-box'>
                  <label for="a">A</label>
                  <input id='a' onChange={this.handleA}/>
                  <label for="b">B</label>
                  <input id='b' onChange={this.handleB}/>
                  <button
                          onClick={this.handleSum}
                  >wynik:</button>
                  <div className='outcome'>
                    {/*{outcome}*/} {numA}+{numB}={outcome}
                  </div>



                </div>
                <div className={isToggle2 ? "box second" : "box second color"}>
                  <i>{isToggle2 ? defContent : longText}</i>
                </div>


              </div>
              <div className='btn-wrap'>
                <button
                        onClick={this.handlerTextChange}
                > Click should change text inside
                </button>
                <button
                        onClick={this.handlerContentChange}
                > second button
                </button>
              </div>

              <button
                      onClick={this.handleSpin}
                      className='spin'>spin left box
              </button>

            </>


    )
  }
}

export default Exercise;