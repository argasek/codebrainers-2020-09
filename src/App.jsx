import React from 'react';
import './App.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import PlantasticNavbar from "components/nav/navbar/PlantasticNavbar";
import {someOtherArray} from "constants/PlantConstants";
import PlantasticContainer from "components/main/PlantasticContainer";

class App extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      plantName: '',
      someSelectField: '333',
      fertilizingFrequency: someOtherArray[someOtherArray.length - 1].value,
      userFullName: ''
    };
  }

  handleUserFullNameChange = (event) => {
    const userFullName = event.target.value;
    console.log(userFullName);
    this.setState({
      userFullName: userFullName
    })
  }

  delayFetch(ms, func) {
    return new Promise((resolve, reject) => setTimeout(() => func(resolve, reject), ms));
  }

  inputOnChange = (event) => {
    const {currentTarget} = event;
    const {value, name} = currentTarget;
    this.setState({[name]: value});
  };

  render() {
    const {
      fertilizingFrequency,
      plantName,
      someSelectField,
    } = this.state;

    return (
            <Router>
              <PlantasticNavbar userFullName={this.state.userFullName}/>
              <PlantasticContainer
                      delayFetch={this.delayFetch}
                      someSelectField={someSelectField}
                      fertilizingFrequency={fertilizingFrequency}
                      inputOnChange={this.inputOnChange}
                      plantName={plantName}
                      userFullName={this.state.userFullName}
                      handleUserFullNameChange={this.handleUserFullNameChange}
              />
            </Router>
    )
  }
}


export default App;
