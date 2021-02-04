import {Card, CardBody, Table} from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Room from "components/rooms/Room";
import InProgress from "components/shared/InProgress";
import {RiCelsiusFill} from "react-icons/ri";
import RoomPlain from "models/RoomPlain";



const ROOMS_FETCH_DELAY = 250;

class Rooms extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      successRooms: undefined,
      inProgress: false,
    };
  }

  componentDidMount() {
    this.fetchRooms();
  }

  fetchRooms() {
    const requestUrl = "http://gentle-tor-07382.herokuapp.com/rooms/";
    this.setState({inProgress: true});

    return this.props.delayFetch(ROOMS_FETCH_DELAY, (resolve, reject) => {
      const promise = axios.get(requestUrl);

      promise
              .then((response) => this.fetchSuccessRooms(response,resolve))
              .catch((error) => this.fetchErrorRooms(error, reject))
              .finally(() => {
                this.setState({inProgress: false});
              })
    });


  }
  fetchSuccessRooms(response, resolve){
    const data = response.data;
    const rooms = data.map((item) => {
      const room = new RoomPlain();
      return room.fromPlain(item)
    });
    const successRooms = true;
    this.setState({
      rooms,successRooms
    });
    resolve();
  }
  fetchErrorRooms(error, reject){
    this.setState({
      successRooms: false
    });
    reject();
  }

  render() {
    const {rooms, successRooms, inProgress} = this.state;

    return (
            <Card>
              <CardBody>

                <InProgress inProgress={inProgress}/>
                {
                  successRooms === false &&
                  <p>Unable to fetch Rooms</p>
                }
                {
                  successRooms && (
                          <>
                            <Table bordered>
                            <thead>
                            <tr>
                              <th  className="solid-data"  colSpan={"100%"}>Rooms</th>
                            </tr>
                            <tr>
                              <th >Id</th>
                              <th >Room Name</th>
                              <th >Sun exposure</th>
                              <th >Humidity</th>
                              <th >Temperature [<RiCelsiusFill/>]</th>
                            </tr>
                            </thead>

                            <tbody>
                            {
                              rooms.map(
                                      (room, index, arr) => (<Room room={room} key={index}/>)
                              )
                            }
                            </tbody>

                          </Table>

                          </>
                  )
                }
              </CardBody>
            </Card>
    )
  }


}
Rooms.propTypes = {
  delayFetch: PropTypes.func.isRequired,
};


export default Rooms;
