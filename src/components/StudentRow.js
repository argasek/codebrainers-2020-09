import React from "react";
import {codebrainersStudents} from "../models/student";

export default function StudentRow(props) {
    const student = props.student;
    const {fullName, numberOfBeers, participationCount} = student;
    let sortBy = props.sortBy;
    let counter = props.counter;
    let directionValue = props.directionValue;
    let backgroundStyleCellsName;
    let backgroundStyleCellsBeers;
    let backgroundStyleCellsAttendance;
    let iterationCount = codebrainersStudents.length;

    let rgba = "rgba";
    let r = 136;
    let g = 15;
    let b = 15;
    let a = changeA(counter);
    let alterA =changeAlterA(counter);

    function changeA(counter) {
        return 0.1 +(counter/10);
    }
    function changeAlterA(counter){
        return (iterationCount/10)-(counter * 0.1);
    }

    let concatenatedColor = rgba + '(' + r + ',' + g + ',' + b + ',' + a + ')';
    let concatenatedColorAlter = rgba + '(' + r + ',' + g + ',' + b + ',' + alterA + ')';
    let checkedCellsBackground = {backgroundColor: concatenatedColor};
    let checkedCellsBackgroundAlter ={backgroundColor: concatenatedColorAlter};
    console.log(checkedCellsBackgroundAlter);
    console.log(checkedCellsBackground);
    console.log(iterationCount);



    if (sortBy === "fullName") {
        if (directionValue === "Ascending") {
            backgroundStyleCellsName = checkedCellsBackground;
        } else {
            backgroundStyleCellsName = checkedCellsBackgroundAlter;

        }

    } else if (sortBy === "numberOfBeers") {
        if (directionValue === "Ascending") {
            backgroundStyleCellsBeers = checkedCellsBackground;
        } else {
            backgroundStyleCellsBeers = checkedCellsBackgroundAlter;

        }
    } else if (sortBy === "participationCount") {
        if (directionValue === "Ascending") {
            backgroundStyleCellsAttendance = checkedCellsBackground;

        } else {
            backgroundStyleCellsAttendance = checkedCellsBackgroundAlter;

        }
    }



    return (
        <tr>
            <td style={backgroundStyleCellsName}> {fullName} </td>
            <td style={backgroundStyleCellsBeers}>  {numberOfBeers}</td>
            <td style={backgroundStyleCellsAttendance}> {participationCount}</td>
        </tr>
    );
}