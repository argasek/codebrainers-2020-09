import React from "react";
import StudentRow from "./StudentRow";


function StudentList(props) {
    const students = props.students;
    let sortBy = props.sortBy;
    const sortDirection = props.sortDirection;
    const multiplier = sortDirection ? 1 : -1;
    const directionValue = sortDirection ? "Ascending" : "Descending";
    let backgroundStyleName;
    let backgroundStyleBeer;
    let backgroundStyleAttend;
    let checkedLabelBackground = {backgroundColor:"#621"};
    let counter =0;



    if (sortBy === "fullName") {
        sortBy = "student's name";
        backgroundStyleName = checkedLabelBackground;

    } else if (sortBy === "participationCount") {
        sortBy = "attendance";
        backgroundStyleAttend = checkedLabelBackground;

    } else {
        sortBy = "earned beers";
        backgroundStyleBeer = checkedLabelBackground;
    }


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

    return (
        <table className='student-table' cellSpacing="0" cellPadding="0">
            <thead>
            <tr>
                <th colSpan={3}>Table sorted by: {sortBy} | {directionValue}</th>

            </tr>
            <tr>
                <th style={backgroundStyleName}>Full name</th>
                <th style={backgroundStyleBeer}>Number of beers</th>
                <th style={backgroundStyleAttend}>Participation</th>
            </tr>
            </thead>
            <tbody>
            {
                sortedStudents.map((student, index) => <StudentRow student={student} key={index} sortBy={sortBy} counter={counter++} directionValue={directionValue}/>)
            }
            </tbody>
        </table>
    );

}



export default StudentList;