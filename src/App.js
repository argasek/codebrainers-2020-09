import React from 'react';
import './App.css';
import StudentList from './components/StudentList';
import {codebrainersStudents} from "./models/student";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sortDirections: [false, false, false],
        };

    }

    changeSortDirection = (sortBy) => {
        const sortDirection = this.state.sortDirections;
        if (sortBy === "fullName") {
            this.setState({
                sortDirections: [!sortDirection[0], sortDirection[1], sortDirection[2]]});
        } else if (sortBy === "participationCount") {
            this.setState({
                sortDirections: [sortDirection[0], !sortDirection[1], sortDirection[2]]});
        } else if (sortBy === "numberOfBeers") {
            this.setState({
                sortDirections: [sortDirection[0], sortDirection[1], !sortDirection[2]]});
        }
        console.log(sortDirection);
    }

    render() {
        console.log('render()');

        const sortDirection = this.state.sortDirections;

        return (
            <div>
                <StudentList
                    students={codebrainersStudents}
                    sortBy="fullName"
                    sortDirection={sortDirection[0]}
                    handleSortDirectionButtonClick={this.changeSortDirection}
                />
                <StudentList
                    students={codebrainersStudents}
                    sortBy="participationCount"
                    sortDirection={sortDirection[1]}
                    handleSortDirectionButtonClick={this.changeSortDirection}
                />
                <StudentList
                    students={codebrainersStudents}
                    sortBy="numberOfBeers"
                    sortDirection={sortDirection[2]}
                    handleSortDirectionButtonClick={this.changeSortDirection}
                />
            </div>
        );
    }

}

export default App;
