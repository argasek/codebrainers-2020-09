import React from "react";

export default function StudentRow(props) {
    const student = props.student;
    const {fullName, numberOfBeers, participationCount} = student;
    return (
        <tr>
            <td> {fullName} </td>
            <td> {numberOfBeers}</td>
            <td> {participationCount}</td>
        </tr>
    );
}