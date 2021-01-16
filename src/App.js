import React from 'react';
import './App.css';
import StudentList from './components/StudentList';
import {codebrainersStudents} from "./models/student";

function App() {
    return (
        <div>
            <StudentList students={codebrainersStudents}/>
            <StudentList students={codebrainersStudents}/>
        </div>
    );
}

export default App;

