import React from "react";
import StudentRow from "./StudentRow";


function StudentList(props) {
    const students = props.students;
    const sortBy = props.sortBy;
    const sortDirection = props.sortDirection;
    const multiplier = sortDirection ? 1 : -1;


    const sortedStudents = students.sort((student1, student2) => {
        const a = student1[sortBy];
        const b = student2[sortBy];
        if (a > b) {
            return 1 * multiplier;
        }
        if (b > a) {
            return -1 * multiplier;
        }
        return 0;

    });
    const fullName = (sortBy ==='fullName') ? {backgroundColor:"#621"} : {backgroundColor: "#444"};
    const numberOfBeers = (sortBy ==='numberOfBeers') ? {backgroundColor:"#621"} : {backgroundColor: "#444"};
    const participationCount = (sortBy ==='participationCount') ? {backgroundColor:"#621"} : {backgroundColor: "#444"};
    const {btnSort} = props;

    return (
        <table className='student-table' cellSpacing="0" cellPadding="0">
            <thead>
            <tr>
                <th colSpan={3} style={{backgroundColor: '#555'}}>
                    <p>Sort by: "fullName", sort direction: true</p>
                <p>
                    <button style={{fontSize: '1rem'}} onClick={btnSort}>Change sort direction</button>
                </p>
                </th>

            </tr>
            <tr>
                <th style={fullName}>Full name</th>
                <th style={numberOfBeers}>Number of beers</th>
                <th style={participationCount}>Participation</th>
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