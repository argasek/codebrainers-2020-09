import React from 'react';
import './App.css';
import StudentList from './components/StudentList';
import {codebrainersStudents} from "./models/student";

function App() {
    return (
        <div>
            <StudentList students={codebrainersStudents} sortBy="fullName" sortDirection="ascending"/>
            <StudentList students={codebrainersStudents} sortBy="participationCount" sortDirection="descending"/>
            <StudentList students={codebrainersStudents} sortBy="numberOfBeers" sortDirection="descending"/>
        </div>
    );
}

export default App;
