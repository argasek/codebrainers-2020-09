import React from "react";
import {codebrainersStudents} from "../models/student";

export default function StudentRow(props) {
    const student = props.student;
    const sortBy = props.sortBy;
    const counter = props.counter;

    const numberOfStudents = codebrainersStudents.length;

    const {fullName, numberOfBeers, participationCount} = student;

    function setOpacity(counter) {
        return 100 / (numberOfStudents - 1) * counter * 0.01;
    }

    const r = 0;
    const g = 0;
    const b = 0;
    const a = setOpacity(counter);
    const opacityColor = 'rgba' + '(' + r + ',' + g + ',' + b + ',' + a + ')';

    const columnHighlightStyle = {backgroundColor: opacityColor, color: '#c60707'};
    const columnRegularStyle = {backgroundColor: '#fff'};

    function gradientHighlightColumn(sortByColumnName) {
        if (sortBy === sortByColumnName) {
            return columnHighlightStyle;
        }
        return columnRegularStyle;
    }

    return (
        <tr>
            <td style={gradientHighlightColumn('fullName')}> {fullName} </td>
            <td style={gradientHighlightColumn('numberOfBeers')}> {numberOfBeers}</td>
            <td style={gradientHighlightColumn('participationCount')}> {participationCount}</td>
        </tr>
    );
}
