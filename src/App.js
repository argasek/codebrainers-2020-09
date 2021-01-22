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

    sortHandlerFunc = () => {
        const sortDirection = this.state.sortDirection;
        this.setState({sortDirection: !this.state.sortDirection});
    }



    render() {
        console.log('render()');
        const sortDirection = this.state.sortDirection;
        return (
            <div>
                <p>Counter has value: {this.state.counter}</p>
                <p>
                    {/*<button*/}
                    {/*    style={{fontSize: '2rem'}}*/}
                    {/*    onClick={ () => {*/}
                    {/*        console.log(this);*/}
                    {/*        this.setState({sortDirection: !this.state.sortDirection});*/}
                    {/*    }}*/}
                    {/*>Increase counter*/}
                    {/*</button>*/}
                </p>
                <StudentList
                    students={codebrainersStudents}
                    sortBy="fullName"
                    sortDirection= {sortDirection}
                    sortHandler={this.sortHandlerFunc}

                />
                {/*<StudentList students={codebrainersStudents} sortBy="participationCount" sortDirection={sortDirection} sortHandler={this.sortHandlerFunc}/>*/}
                {/*<StudentList students={codebrainersStudents} sortBy="numberOfBeers" sortDirection={sortDirection}  sortHandler={this.sortHandlerFunc}/>*/}
            </div>
        );
    }

}

export default App;

