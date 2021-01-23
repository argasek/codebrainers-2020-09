
import React from "react";
import StudentRow from "./StudentRow";

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



    const highlightedStyle = {background: 'teal'};
    const normalStyle = {background: 'white'};

    function isSortingColumnLabel (columnName){
        if (columnName === sortBy)
        {
            return highlightedStyle;
        }
        else {
            return normalStyle;
        }
    }

    return (
        <table className='student-table' cellSpacing="0" cellPadding="0">
            <thead>
            <tr>
                <th colSpan={3} style={{background: 'teal'}}>Sorted by {sortByLabel[sortBy]}, {sortDirectionLabel}</th>
            </tr>
            <tr>
                <th style={isSortingColumnLabel('fullName')}>Full name
                </th>
                <th style={isSortingColumnLabel('numberOfBeers')}>Number
                    of
                    beers
                </th>
                <th style={isSortingColumnLabel('participationCount')}>Participation</th>
            </tr>
            </thead>
            <tbody >
            {
                sortedStudents.map((student, index) => <StudentRow student={student} sortBy={sortBy} key={index} gradientId={index} />)
            }
            </tbody>
        </table>
    );

}


export default StudentList;


