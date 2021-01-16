import React from "react";
import StudentRow from "./StudentRow";


function StudentList(props) {
    const students = props.students;
    const sortBy = props.sortBy;

    const compareStrings = (a, b) => {
        if (a > b) {
            return 1;
        }
        if (b > a) {
            return -1;
        }
        return 0;
    }

    const sortedStudents = students.sort((a, b) => {
        // compareStrings(a.fullName, b.fullName)
        return 0;
    });

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
                sortedStudents.map((student, index) => <StudentRow student={ student } key={ index } />)
            }
            </tbody>
        </table>
    );

}

export default StudentList;