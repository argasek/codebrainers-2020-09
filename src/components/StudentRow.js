import React from "react";
import {codebrainersStudents} from "../models/student";

export default function StudentRow(props) {
    const student = props.student;
    const {fullName, numberOfBeers, participationCount} = student;
    let sortBy = props.sortBy;
    let counter = props.counter;
    let directionValue = props.directionValue;
    const sortDirection = props.sortDirection;
    let backgroundStyleCellsName;
    let backgroundStyleCellsBeers;
    let backgroundStyleCellsAttendance;
    let iterationCount = codebrainersStudents.length;
    // console.log(sortDirection);

    let rgba = "rgba";
    let r = 136;
    let g = 15;
    let b = 15;
    let a = changeA(counter);
    let alterA = changeAlterA(counter);

    function changeA(counter) {
        return 0.1 + (counter / 10);
    }

    function changeAlterA(counter) {
        return (iterationCount / 10) - (counter * 0.1);
    }

    let concatenatedColor = rgba + '(' + r + ',' + g + ',' + b + ',' + a + ')';
    let concatenatedColorAlter = rgba + '(' + r + ',' + g + ',' + b + ',' + alterA + ')';
    let checkedCellsBackground = {backgroundColor: concatenatedColor};
    let checkedCellsBackgroundAlter = {backgroundColor: concatenatedColorAlter};


    if (sortBy === "fullName") {
        if (sortDirection) {
            backgroundStyleCellsName = checkedCellsBackground;
        } else {
            backgroundStyleCellsName = checkedCellsBackgroundAlter;

        }

    } else if (sortBy === "numberOfBeers") {
        if (sortDirection) {
            backgroundStyleCellsBeers = checkedCellsBackground;
        } else {
            backgroundStyleCellsBeers = checkedCellsBackgroundAlter;

        }
    } else if (sortBy === "participationCount") {
        if (sortDirection) {
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