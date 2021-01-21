import React from "react";
import '../App.css';
import App from '../App.js';
// import LinearGradient from 'react-native-linear-gradient';

export default function StudentRow(props) {
    const student = props.student;
    // const gradientColor = {
    //     0: 'white',
    //     0.1: '#d4d4d3',
    //     0.2: '#bfbebe',
    //     0.3: '#aaa9a8',
    //     0.4: '#959392',
    //     0.5: '#7f7d7c',
    //     0.6: '#6a6866',
    //     0.7: '#555251',
    //     0.8: '#3f3d3b',
    //     0.9: '#2a2725',
    //     1: 'black'
    // };
        let gradientColor = {
        0: 'white',
        1: '#d4d4d3',
        2: '#aaa9a8',
        3: '#7f7d7c',
        4: '#6a6866',
        5: '#555251',
        6: '#3f3d3b',
        7: 'black'
    };
    // const assumeKey=2;
    // const numberOfKeys = 7;
    const {fullName, numberOfBeers, participationCount} = student;


    return (
        <tr>
            <td style={{
                background: gradientColor[1],
                color: gradientColor[7]
            }}> {fullName} </td>
            <td> {numberOfBeers}</td>
            <td>  {participationCount}</td>
        </tr>
    );
}