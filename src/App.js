import React from 'react';
import './App.css';
import StudentList from './components/StudentList';
import {codebrainersStudents} from "./models/student";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            counter:1,
        };

    }

    render() {
        console.log('render()');

        return (
            <div>
                <p>Counter has value: {this.state.counter}</p>
                <p>
                    <button
                        style={{fontSize: '2rem'}}
                        onClick={ () => {
                            console.log(this);
                            this.state.counter++;
                            console.log(this.state.counter);
                            // alert('Click!');
                        }}
                    >Increase counter
                    </button>
                </p>
                <StudentList students={codebrainersStudents} sortBy="fullName" sortDirection={false}/>
                <StudentList students={codebrainersStudents} sortBy="participationCount" sortDirection={true}/>
                <StudentList students={codebrainersStudents} sortBy="numberOfBeers" sortDirection={false}/>
            </div>
        );
    }

}

export default App;

