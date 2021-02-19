import React from "react";
import { Card, CardBody, Table } from "reactstrap";
import axios from "axios";
import Room from "components/rooms/Room";
import InProgress from "components/shared/InProgress";
import withRooms from "components/rooms/WithRooms";



class Rooms extends React.PureComponent {

  componentDidMount() {
    this.props.fetchRooms();
  }


  render() {
    const {rooms, roomsSuccess, inProgress} = this.props;

    return (
      <Card className="mb-4">
        <CardBody>
          <InProgress inProgress={inProgress}/>
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
                  <th>Draft</th>
                </tr>
                </thead>
                <tbody>
                {
                  rooms.map((room, index, arr) => (
                          <Room room={room} key={index} index={index}/>)
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

export default withRooms(Rooms);