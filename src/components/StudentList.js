import React from "react";
import StudentRow from "./StudentRow";


function StudentList(props) {
    const students = props.students;
    const sortBy = props.sortBy;
    const sortDirection = props.sortDirection;

    const multiplier = (sortDirection === "ascending") ?
        1 : (sortDirection === "descending") ? -1 : 0;

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

    const highlightStyle = {backgroundColor: '#c60707'};
    const regularStyle = {backgroundColor: '#555'};

    function highlightHeader(headerName) {
        if (sortBy === headerName){
            return highlightStyle;
        }
        return regularStyle;
    }

    let counter = 0;

    return (
        <table className='student-table' cellSpacing="0" cellPadding="0">
            <thead>
            <tr>
                <th colSpan={3} style={{backgroundColor: '#555'}}>
                    Sort by: Student's {sortBy}.
                    Sort direction: {sortDirection}.
                </th>
            </tr>
            <tr>
                <th style={highlightHeader('fullName')}>Full name</th>
                <th style={highlightHeader('numberOfBeers')}>Number of beers</th>
                <th style={highlightHeader('participationCount')}>Participation</th>
            </tr>
            </thead>
            <tbody>
            {
                sortedStudents.map((student, index) =>
                    <StudentRow student={student} key={index} sortBy={sortBy} counter={counter++} />)
            }
            </tbody>
        </table>
    );

}

export default StudentList;
