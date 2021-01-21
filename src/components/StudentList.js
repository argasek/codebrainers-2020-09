import React from "react";
import StudentRow from "./StudentRow";
import '../App.css';


function StudentList(props) {
    const students = props.students;
    const sortBy = props.sortBy;
    const sortDirection = props.sortDirection;
    const multiplier = sortDirection ? 1 : -1;
    const sortDirectionLabel = sortDirection ? "ascending" : "descending";
    const sortByLabel = {
        fullName: 'full name',
        participationCount: 'participation',
        numberOfBeers: 'number of beers'
    };

    function isSortingColumnLabel(columnName) {
        if (columnName === sortBy) {
            return true;
        }
        return false;
    };

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
                <th colSpan={3} style={{background: 'teal'}}>Sorted by {sortByLabel[sortBy]}, {sortDirectionLabel}</th>
            </tr>
            <tr>
                <th style={isSortingColumnLabel('fullName') ? {background: 'teal'} : {background: '#444'}}>Full name
                </th>
                <th style={isSortingColumnLabel('numberOfBeers') ? {background: 'teal'} : {background: '#444'}}>Number
                    of
                    beers
                </th>
                <th style={isSortingColumnLabel('participationCount') ? {background: 'teal'} : {background: '#444'}}>Participation</th>
            </tr>
            </thead>
            <tbody >
            {
                sortedStudents.map((student, index) => <StudentRow student={student} key={index}/>)
            }
            </tbody>
        </table>
    );

}


export default StudentList;


