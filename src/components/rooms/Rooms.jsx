import React from "react";
import { Card, CardBody, Table } from "reactstrap";
import axios from "axios";
import RoomRow from "components/rooms/RoomRow";
import InProgress from "components/shared/InProgress";
import Room from "models/Room";



const ROOMS_FETCH_DELAY = 250;

class Rooms extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      roomsSuccess: undefined,
      roomsInProgress: false,
    };
  }

  componentDidMount() {
    this.fetchRooms();
  }

  fetchRooms() {
    const requestUrl = "http://gentle-tor-07382.herokuapp.com/rooms/";
    this.setState({roomsInProgress: true});

    return this.props.delayFetch(ROOMS_FETCH_DELAY, (resolve, reject) => {
      const promise = axios.get(requestUrl);

      promise
        .then((response) => this.fetchRoomsSuccess(response, resolve))
        .catch((error) => this.fetchRoomsError(error, reject))
        .finally(() => this.setState({roomsInProgress: false}));
    });
  }

  fetchRoomsSuccess(response, resolve) {
    const data = response.data;
    const rooms = data.map((item) =>{
      const room = new Room();
      return room.fromPlain(item);
    });
    const roomsSuccess = true;
    this.setState({rooms, roomsSuccess});
    resolve();
  }

  fetchRoomsError(error, reject) {
    this.setState({roomsSuccess: false});
    reject();
  }

  render() {
    const {rooms, roomsSuccess, roomsInProgress} = this.state;

    return (
      <Card className="mb-4">
        <CardBody>
          <InProgress inProgress={roomsInProgress}/>
          {
            roomsSuccess === false &&
            <p>Unable to fetch rooms.</p>
          }
          {
            roomsSuccess && (
              <>
              <Table>
                <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Exposure</th>
                  <th>Humidity</th>
                  <th>Temperature</th>
                  <th>Drafty</th>
                </tr>
                </thead>
                <tbody>
                {
                  rooms.map((room, index, arr) => (
                          <RoomRow room={room} key={index} index={index}/>)
                  )
                }
                </tbody>
              </Table>
              </>
          )}
        </CardBody>
      </Card>
    );
  }
}

export default Rooms;