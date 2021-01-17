import React from "react";
import {codebrainersStudents} from "../models/student";

export default function StudentRow(props) {
    const student = props.student;
    const {fullName, numberOfBeers, participationCount} = student;
    let sortBy = props.sortBy;
    let backgroundStyleCells;

    if(sortBy==="fullName"){
        backgroundStyleCells={backgroundColor:"#555"};
    } else {
           backgroundStyleCells={backgroundColor:"#fff"};
    }



    return (
        <tr>
            <td style={backgroundStyleCells}> {fullName} </td>
            <td style={backgroundStyleCells}>  {numberOfBeers}</td>
            <td style={backgroundStyleCells}> {participationCount}</td>
        </tr>
    );
}