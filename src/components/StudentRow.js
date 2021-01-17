import React from "react";
import '../App.css';

export default function StudentRow(props) {
    const student = props.student;
    const {fullName, numberOfBeers, participationCount} = student;


    return (
        <tr>
            <td className="student-row-full-name"> {fullName} </td>
            <td className="student-row-number-of-beers"> {numberOfBeers}</td>
            <td className="student-row-participation"> {participationCount}</td>
        </tr>
    );
}