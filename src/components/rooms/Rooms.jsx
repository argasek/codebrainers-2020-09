import {Card, CardBody, Table} from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Room from "components/rooms/Room";
import InProgress from "components/shared/InProgress";
// import Plants from "components/plants/Plants";
// import {RiCelsiusFill} from "react-icons/ri";
// import moment from "moment";


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
      axios.get(requestUrl)
              .then((response)=>{
                const data =response.data;
                const rooms = data.map((item)=>({name: item.name, id: item.id}));
                const  successRooms = true;
                this.setState({rooms, successRooms});
                resolve();
              })
              .catch((error) => {
                this.setState({successRooms:false});
                reject();
              })
              .finally(()=>{
                console.log("resolved");
              })  ;
    });



  }

  render() {
    const {rooms, successRooms, inProgress} = this.state;

    return (
            <Card>
              <CardBody>
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
                              <th className="table-mid-color" >Room Name</th>
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
