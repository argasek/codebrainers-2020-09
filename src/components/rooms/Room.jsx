import React from 'react';

class Room extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {



    return (
            <tr>
              <td >{this.props.room.id} </td>
              <td >{this.props.room.name}</td>
              <td >{this.props.room.exposure}</td>
              <td >{this.props.room.humidity}</td>
              <td >{this.props.room.temperature}</td>
            </tr>
    )
  }

}
export default Room;