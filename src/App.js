import React from 'react';
import './App.css';
import StudentList from './components/StudentList';
import {codebrainersStudents} from "./models/student";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sortDirection: props.sortDirection,
        };

    }

    render() {
        console.log('render()');
        const sortDirection = this.state.sortDirection;
        return (
            <div>
                <StudentList
                    students={codebrainersStudents}
                    sortBy="fullName"
                    sortDirection={sortDirection}
                />
                <StudentList students={codebrainersStudents} sortBy="participationCount" sortDirection={sortDirection}/>
                <StudentList students={codebrainersStudents} sortBy="numberOfBeers" sortDirection={sortDirection}/>
            </div>
        );
    }

}

export default App;

