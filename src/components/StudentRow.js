import React from "react";
import '../App.css';


export default function StudentRow(props) {
    const student = props.student;
    const sortBy = require('./StudentList.js');
    const {fullName, numberOfBeers, participationCount} = student;

    return (
        <tr >
            <td > {fullName} </td>
            <td > {numberOfBeers}</td>
            <td > {participationCount}</td>
        </tr>
    );
}