import React from 'react';
import './App.css';
import StudentList from './components/StudentList';
import {codebrainersStudents} from "./models/student";

function App() {
    return (
        <div>
            <StudentList students={codebrainersStudents} sortBy='fullName'/>
            {/*<StudentList students={codebrainersStudents} sortBy="participationCount"/>*/}
            {/*<StudentList students={codebrainersStudents} sortBy='numberOfBeers'/>*/}

        </div>
    );
}

export default App;

