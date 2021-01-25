import React from 'react';
import './App.css';
import StudentList from './components/StudentList';
import {codebrainersStudents} from "./models/student";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sortDirection: false,
        };

    }

    changeSortDirection = () => {
        const sortDirection = this.state.sortDirection;
        this.setState({sortDirection: !sortDirection});
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
                    buttonSortDirection={this.changeSortDirection}
                />
                <StudentList
                    students={codebrainersStudents}
                    sortBy="participationCount"
                    sortDirection={sortDirection}
                    buttonSortDirection={this.changeSortDirection}/>
                <StudentList
                    students={codebrainersStudents}
                    sortBy="numberOfBeers"
                    sortDirection={sortDirection}
                    buttonSortDirection={this.changeSortDirection}/>
            </div>
        );
    }

}

export default App;

