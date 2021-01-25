import React from "react";
import StudentRow from "./StudentRow";
import {FaAngleDoubleDown} from "react-icons/fa";
import {FaAngleDoubleUp} from "react-icons/fa";


class StudentList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            students: props.students,
            sortBy: props.sortBy,
            sortDirection: props.sortDirection,
        }

    }

    render() {

        const students = this.state.students;
        let sortBy = this.state.sortBy;
        const sortDirection = this.state.sortDirection;

        const multiplier = sortDirection ? 1 : -1;

        // const {sortHandler} = props;
        const sortHandler = () => {
            this.setState({sortDirection: !this.state.sortDirection});
        }


        const descending = <FaAngleDoubleDown
            onClick={sortHandler}/>;
        const ascending = <FaAngleDoubleUp
            onClick={sortHandler}/>;

        const directionValue = sortDirection ? descending : ascending;



        let backgroundStyleName;
        let backgroundStyleBeer;
        let backgroundStyleAttend;
        let checkedLabelBackground = {backgroundColor: "#621"};
        let counter = 0;
        let sortingTitle;


        if (sortBy === "fullName") {
            sortingTitle = "student's name";
            backgroundStyleName = checkedLabelBackground;


        } else if (sortBy === "participationCount") {
            sortingTitle = "attendance";
            backgroundStyleAttend = checkedLabelBackground;


        } else {
            sortingTitle = "earned beers";
            backgroundStyleBeer = checkedLabelBackground;

        }


        const sortedStudents = students.sort((student1, student2) => {
            const a = student1[sortBy];
            const b = student2[sortBy];
            if (a > b) {
                return 1 * multiplier;
            }
            if (b > a) {
                return -1 * multiplier;
            }
            return 0;

        });


        return (
            <table className='student-table' cellSpacing="0" cellPadding="0">
                <thead>
                <tr>
                    <th colSpan={3}>
                        <div className="title-row">
                            <div>Table sorted by: {sortingTitle} |</div>
                            <div>
                                <small style={{marginRight: "10px"}}>sort</small>
                                {directionValue}
                            </div>

                        </div>


                    </th>
                </tr>
                <tr>
                    <th style={backgroundStyleName}>Full name</th>
                    <th style={backgroundStyleBeer}>Number of beers</th>
                    <th style={backgroundStyleAttend}>Participation</th>
                </tr>
                </thead>
                <tbody>
                {
                    sortedStudents.map((student, index) => <StudentRow student={student} key={index} sortBy={sortBy}
                                                                       counter={counter++}
                                                                       directionValue={directionValue}
                                                                       sortDirection={this.state.sortDirection}

                    />)
                }
                </tbody>
            </table>
        );
    }

}


export default StudentList;