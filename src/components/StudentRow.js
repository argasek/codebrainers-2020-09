
import React from "react";
import {codebrainersStudents} from "../models/student";

export default function StudentRow(props) {
    const student = props.student;
    // const gradientId = props.gradientId+1;
    const sortBy = props.sortBy;



    const highlightedStyle = {background: 'teal'};
    const normalStyle = {background: 'white'};



    function isSortingColumn (columnName){
        if (columnName === sortBy)
        {
            return highlightedStyle;
        }
        else {
            return normalStyle;
        }
    }

    const {fullName, numberOfBeers, participationCount} = student;


    return (
        <tr>
            <td style={isSortingColumn('fullName')}> {fullName} </td>
            <td style={isSortingColumn('numberOfBeers')}> {numberOfBeers}</td>
            <td style={isSortingColumn('participationCount')}>  {participationCount}</td>
        </tr>
    );
}