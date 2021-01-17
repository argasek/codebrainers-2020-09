import React from 'react';
import './App.css';
import StudentList from './components/StudentList';
import {codebrainersStudents} from "./models/student";

function App() {
    return (
        <div>
            <StudentList students={codebrainersStudents} sortBy="fullName" sortDirection='descending &darr;'/>
            <StudentList students={codebrainersStudents} sortBy="participationCount" sortDirection='ascending &uarr;'/>
            <StudentList students={codebrainersStudents} sortBy="numberOfBeers" sortDirection='descending &darr;'/>
        </div>
    );
}

export default App;

