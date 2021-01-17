import React from "react";

export default function StudentRow(props) {
    const student = props.student;
    const {fullName, numberOfBeers, participationCount} = student;


    let backgroundStyleCells;



    return (
        <tr>
            <td style={backgroundStyleCells}> {fullName} </td>
            <td style={backgroundStyleCells}>  {numberOfBeers}</td>
            <td style={backgroundStyleCells}> {participationCount}</td>
        </tr>
    );
}