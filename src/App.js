import React from 'react';
import './App.css';
import StudentList from './components/StudentList';
import {codebrainersStudents} from "./models/student";

class App extends React.Component {

    render() {
        console.log('render()');
        let counter = 1;

        return (
            <div>
                <p>Counter has value: {counter}</p>
                <p>
                    <button
                        style={{ fontSize: '2rem' }}
                        onClick={function () {
                            alert('Click!');
                        }}
                    >Increase counter</button>
                </p>
                <StudentList students={codebrainersStudents} sortBy="fullName" sortDirection={false}/>
                <StudentList students={codebrainersStudents} sortBy="participationCount" sortDirection={true}/>
                <StudentList students={codebrainersStudents} sortBy="numberOfBeers" sortDirection={false}/>
            </div>
        );
    }

}

export default App;

