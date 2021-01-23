import React from "react";
import {codebrainersStudents} from "../models/student";

export default function StudentRow(props) {
    const student = props.student;
    const sortBy = props.sortBy;
    const gradientId = props.gradientId;
    const sortDirection = props.sortDirection;

    let numberOfStudents = codebrainersStudents.length;
    let reverseSortDirection = !sortDirection;

    function getColorNumber(gradientId, sortDirection) {
        if (sortDirection === false) {
            return Math.round((gradientId / numberOfStudents) * 255);
        } else {
            return Math.round(255 - ((gradientId / numberOfStudents) * 255));
        }
    }

    let gradientColor = 'rgba(0,' + getColorNumber(gradientId,sortDirection) + ',' + getColorNumber(gradientId,sortDirection) + ')';
    let gradientTextColor = 'rgba(0,' + getColorNumber(gradientId,reverseSortDirection) + ',' + getColorNumber( gradientId,reverseSortDirection) + ')';

    const highlightedStyle = {background: gradientColor, color: gradientTextColor};
    const normalStyle = {background: 'white', color: 'black'};

    function isSortingColumn(columnName) {
        if (columnName === sortBy) {
            return highlightedStyle;
        } else {
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