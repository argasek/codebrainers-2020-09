import React from "react";
import StudentRow from "./StudentRow";

class StudentList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            students: props.students,
            sortBy: props.sortBy,
            sortDirection: props.sortDirection,
        };
    }

    render() {
        const students = this.state.students;
        const sortBy = this.state.sortBy;
        const sortDirection = this.state.sortDirection;

        const
            multiplier = sortDirection ? 1 : -1;
        const
            sortDirectionLabel = sortDirection ? "ascending" : "descending";


        const
            sortByLabel = {
                fullName: 'full name',
                participationCount: 'participation',
                numberOfBeers: 'number of beers'
            };


        const
            sortedStudents = students.sort((student1, student2) => {
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


        const
            highlightedStyle = {background: 'teal'};
        const
            normalStyle = {background: 'white'};

        function

        isSortingColumnLabel(columnName) {
            if (columnName === sortBy) {
                return highlightedStyle;
            } else {
                return normalStyle;
            }
        }

        return (

            <table className='student-table' cellSpacing="0" cellPadding="0">
                <thead>
                <tr>
                    <th colSpan={3} style={{background: 'teal'}}>Sorted
                        by {sortByLabel[sortBy]}, {sortDirectionLabel}</th>
                    <p>
                        <button
                            onClick={() => {
                                this.setState({sortDirection: !this.state.sortDirection});
                            }}
                        >Set sort direction
                        </button>
                    </p>

                </tr>
                <tr>
                    <th style={isSortingColumnLabel('fullName')}>Full name
                    </th>
                    <th style={isSortingColumnLabel('numberOfBeers')}>Number
                        of
                        beers
                    </th>
                    <th style={isSortingColumnLabel('participationCount')}>Participation</th>
                </tr>
                </thead>
                <tbody>
                {
                    sortedStudents.map((student, index) => <StudentRow student={student} sortBy={sortBy} key={index}
                                                                       gradientId={index}
                                                                       sortDirection={sortDirection}/>)
                }
                </tbody>
            </table>
        )
            ;
    }
}


export default StudentList;



