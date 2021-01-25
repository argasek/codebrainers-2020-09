import React from 'react';
import './App.css';
import StudentList from './components/StudentList';
import {codebrainersStudents} from "./models/student";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sortDirection: false
        };

    }
    sortingDirection = () => {
        const sortDirection = this.state.sortDirection;
        this.setState({sortDirection: !sortDirection});
    }

    render() {
        console.log('render()');
        const sortDirection = this.state.sortDirection;
        return (
            <div>
                <StudentList students={codebrainersStudents} sortBy="fullName" sortDirection={sortDirection} btnSort={this.sortingDirection}/>
                <StudentList students={codebrainersStudents} sortBy="participationCount" sortDirection={sortDirection} btnSort={this.sortingDirection}/>
                <StudentList students={codebrainersStudents} sortBy="numberOfBeers" sortDirection={sortDirection} btnSort={this.sortingDirection}/>
            </div>
        );
    }
}

export default App;

