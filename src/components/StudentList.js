import React from "react";
import StudentRow from "./StudentRow";


function StudentList(props) {
    const students = props.students;
    const sortBy = props.sortBy;
    const sortDirection = props.sortDirection;
    const multiplier = sortDirection ? 1 : -1;
    const sortDirectionHead = sortDirection ? 'Ascending' : 'Descending';


    const sortedStudents = students.sort((student1, student2) => {
        const a = student1[sortBy];
        const b = student2[sortBy];
        console.log(a,b,sortBy);
        if (a > b) {
            return 1 * multiplier;
        }
        if (b > a) {
            return -1 * multiplier;
        }
        return 0;

    });

    return (
        <table className='student-table' cellSpacing="0" cellPadding="0">
            <thead>
            <tr>
                <th colspan={3} style={{backgroundColor: '#555'}}>Sort by{sortBy}, Direction by: {sortDirectionHead}</th>
            </tr>
            <tr>
                <th>Full name</th>
                <th>Number of beers</th>
                <th style={{backgroundColor: '#621'}}>Participation</th>
            </tr>
            </thead>
            <tbody>
            {
                sortedStudents.map((student, index) => <StudentRow student={student} key={index}/>)
            }
            </tbody>
        </table>
    );

}

export default StudentList;