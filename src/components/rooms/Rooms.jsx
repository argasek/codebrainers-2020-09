import {Card, CardBody, Table} from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Room from "components/rooms/Room";
import InProgress from "components/shared/InProgress";



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
              .then((response) => {
                const data = response.data;
                const rooms = data.map((item) => {
                  const {
                    id, name,exposure,temperature,humidity} = item;

                  return {
                    id, name, exposure,temperature,humidity};
                });

                const successRooms = true;
                this.setState({rooms, successRooms});
                resolve();
              })
              .catch((error) => {
                this.setState({successRooms: false});
                reject();
              })
              .finally(() => {
                this.setState({inProgress: false});
              })
    });


  }

  render() {
    const {rooms, successRooms, inProgress} = this.state;

    return (
            <Card>
              <CardBody>
                this loading spinner is just an element added to this page it is not "real" loading action.
                <InProgress inProgress={{inProgress}}/>
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
                              <th >Temperature</th>
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
