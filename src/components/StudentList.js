import React from "react";
import StudentRow from "./StudentRow";


function StudentList(props) {
    const students = props.students;
    const sortBy = props.sortBy;
    const sortDirection = props.sortDirection;
    const multiplier = sortDirection ? 1 : -1;
    const sortDirectionPrint = sortDirection ? 'ascending' : 'descending';
    const customSortNames =
        sortBy === "fullName" ? "Student\s full name" :
            sortBy === "numberOfBeers" ? "Number of beers" :
                sortBy === "participationCount" ? "Course participation count" : "no";


    const sortedStudents = students.sort((student1, student2) => {
        const a = student1[sortBy];
        const b = student2[sortBy];
        console.log(a, b, sortBy);
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
                <th colspan={3} style={{backgroundColor: '#555'}}>Sorted by: {customSortNames},
                    sort direction: {sortDirectionPrint}</th>
            </tr>
            <tr>
                <th style={sortBy === "fullName" ? {backgroundColor: '#333'} : {backgroundColor: '#555'}}>Full name</th>
                <th style={sortBy === "numberOfBeers" ? {backgroundColor: '#333'} : {backgroundColor: '#555'}}>Number of
                    beers
                </th>
                <th style={sortBy === "participationCount" ? {backgroundColor: '#333'} : {backgroundColor: '#555'}}>Participation</th>
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