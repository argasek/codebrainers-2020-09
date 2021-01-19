import React from 'react';
import './App.css';
import StudentList from './components/StudentList';
import {codebrainersStudents} from "./models/student";

function App() {
    return (
        <div>
            <StudentList students={codebrainersStudents} sortBy="fullName" sortDirection={true} />
            <StudentList students={codebrainersStudents} sortBy="participationCount" sortDirection={true}/>
            <StudentList students={codebrainersStudents} sortBy="numberOfBeers" sortDirection={false}/>
        </div>
    );
}

export default App;

