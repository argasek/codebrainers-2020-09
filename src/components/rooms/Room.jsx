import React from 'react';
import {temp, humidity, exposure} from "components/plants/PlantRow";
import RoomPlain from "models/RoomPlain";
import PropTypes from 'prop-types';


class Room extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {room} = this.props;
    const {
      roomId,
      roomName,
      roomExposure,
      roomTemperature,
      roomHumidity,
    } = room;
    return (
            <tr>
              <td>{roomId} </td>
              <td>{roomName}</td>
              <td>{exposure[roomExposure]}</td>
              <td>{humidity[roomHumidity]}</td>
              <td>{temp[roomTemperature]}</td>
            </tr>
    )
  }

}
Room.propTypes ={
  room: PropTypes.instanceOf(RoomPlain).isRequired,
}

export default Room;