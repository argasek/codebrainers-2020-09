import React from 'react';
import{temp,humidity,exposure} from "components/plants/Plant";

class Room extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
            <tr>
              <td >{this.props.room.id} </td>
              <td >{this.props.room.name}</td>
              <td >{exposure[this.props.room.exposure]}</td>
              <td >{humidity[this.props.room.humidity]}</td>
              <td >{temp[this.props.room.temperature]}</td>
            </tr>
    )
  }

}
export default Room;