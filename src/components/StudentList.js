import React from "react";

function StudentList(props) {

    return (
        <table className='student-table' cellSpacing="0" cellPadding="0">
            <thead>
            <tr>
                <th>Kolumna 1</th>
                <th>Kolumna 2</th>
                <th>Kolumna 3</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Kolumna 1</td>
                <td>Kolumna 2</td>
                <td>Kolumna 3</td>
            </tr>
            <tr>
                <td>Kolumna 1</td>
                <td>Kolumna 2</td>
                <td>Kolumna 3</td>

            </tr>
            <tr>
                <td>Kolumna 1</td>
                <td>Kolumna 2</td>
                <td>Kolumna 3</td>
            </tr>
            </tbody>
        </table>
    );

}

export default StudentList;