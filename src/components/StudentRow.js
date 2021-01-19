import React from "react";
import {codebrainersStudents} from "../models/student";

export default function StudentRow(props) {
    const student = props.student;
    const {fullName, numberOfBeers, participationCount} = student;
    let sortBy = props.sortBy;
    let counter = props.counter;
    let sortDirection = props.sortDirection;
    let backgroundStyleCellsName;
    let backgroundStyleCellsBeers;
    let backgroundStyleCellsAttendance;
    let iterationCount = codebrainersStudents.length;


    let rgba = "rgba";
    let r = 136;
    let g = 15;
    let b = 15;
    let a = changeA(counter);

    function changeA(counter) {

        return iterationCount / 10 * counter * 0.1;

    }


    let concatenatedColor = rgba + '(' + r + ',' + g + ',' + b + ',' + a + ')';


    let checkedCellsBackground = {background: concatenatedColor};


    if (sortBy === "student's name") {
        backgroundStyleCellsName = checkedCellsBackground;
    } else if (sortBy === "earned beers") {
        backgroundStyleCellsBeers = checkedCellsBackground;
    } else if (sortBy === "attendance") {
        backgroundStyleCellsAttendance = checkedCellsBackground;
    }

    if(sortDirection){
         backgroundStyleCellsName ={backgroundColor:"#000"}
    }


    return (
        <tr>
            <td style={backgroundStyleCellsName}> {fullName} </td>
            <td style={backgroundStyleCellsBeers}>  {numberOfBeers}</td>
            <td style={backgroundStyleCellsAttendance}> {participationCount}</td>
        </tr>
    );
}