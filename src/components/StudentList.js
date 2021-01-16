import React from "react";
import {Student} from "../models/student";
import StudentRow from "./StudentRow";



function StudentList(props) {
    const students = props.students;
    const sortBy =props.sortBy;
    console.log(props);

    return (
        <table className='student-table' cellSpacing="0" cellPadding="0">
            <thead>
            <tr>
                <th>Full name</th>
                <th>Number of beers</th>
                <th>Participation</th>
            </tr>
            </thead>
            <tbody>
            {
            students.map((student, index) => <StudentRow student={student} key={index}/> )
            }
            </tbody>
        </table>
    );

}

export default StudentList;