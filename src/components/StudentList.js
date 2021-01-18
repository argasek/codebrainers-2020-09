import React from "react";
import StudentRow from "./StudentRow";


function StudentList(props) {
    const students = props.students;
    const sortBy = props.sortBy;
    const sortDirection = props.sortDirection;
    const multiplier = sortDirection ? 1 : -1;
    const sortDirectionHead = sortDirection ? 'Ascending' : 'Descending';
    // let backGroundAll
    // let backGroundBeer
    // let backGroundParticipians
    // if (sortBy === "fullName") {
    //     sortBy = "Student Name";
    //     backGroundAll = {backgroundColor: '#621'}
    // } else if (sortBy === "numberOfBeers") {
    //     sortBy = "Number of Beers";
    //     backGroundBeer = {backgroundColor: '#621'};
    // } else {
    //     sortBy = "Participation Count";
    //     backGroundParticipians = {backgroundColor: '#621'}


// CHcialem se tak zrobic ale cos nie bangla, a jutro robota :(

const niceToEyeName =
    sortBy === "fullName" ? "Full student name" :
        sortBy === "numberOfBeers" ? "Number of Beers" :
            sortBy === "participationCount" ? "Participation Count" : '0';


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
            <th colspan={3} style={{backgroundColor: '#555'}}>Sort by {niceToEyeName}, Direction
                by: {sortDirectionHead}</th>
        </tr>
        <tr>
            <th style={sortBy === "fullName" ? {backgroundColor: '#621'} : {backgroundColor: '#555'}}>Full name</th>
            <th style={sortBy === "numberOfBeers" ? {backgroundColor: '#621'} : {backgroundColor: '#555'}}>Number of
                beers
            </th>
            <th style={sortBy === "participationCount" ? {backgroundColor: '#621'} : {backgroundColor: '#555'}}>Participation</th>
        </tr>
        </thead>
        <tbody>
        {
            sortedStudents.map((student, index) => <StudentRow student={student} key={index}/>)
        }
        </tbody>
    </table>
)};
export default StudentList;