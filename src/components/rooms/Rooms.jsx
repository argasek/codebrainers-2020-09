import {Card, CardBody, ListGroup, Table} from "reactstrap";
import React from "react";
import PropTypes from "prop-types"
import InProgress from "components/shared/InProgress";
import axios from 'axios';
import RoomItem from "./RoomItem";
import {isPromise} from "formik";


const ROOMS_FETCH_DELAY = 500;

class Rooms extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      rooms: [],
      successRooms: undefined,
      inProgress: false,
    };
  }

  componentDidMount() {
    this.fetchRooms()
            .finally(() => {
              this.setState({inProgress: false});
            })
  }

  fetchRooms() {

    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/rooms/';
    this.setState({inProgress: true});

    return this.props.delayFetch(ROOMS_FETCH_DELAY, (resolve, reject) => {
      const promise = axios.get(requestUrl)

              promise
              .then((response) => {

                // debugger;

                const data = response.data;
                const rooms = data.map((item) => {
                  const {
                    id,
                    name,
                    exposure,
                    temperature,
                    humidity,
                  } = item;
                  console.log(item);
                  return {
                    id,
                    name,
                    exposure,
                    temperature,
                    humidity,
                  };

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
                console.log('Resolved');
              });
    });
  }

  render() {
    const {
      inProgress,
      successRooms,
      rooms,
    } = this.state;


    return (
      <Card>
        <CardBody>
          <div className="app-container">
            <InProgress inProgress={inProgress} />
            {
              successRooms === false &&
              <p>Nie udało się pobrać Kategorii</p>
            }
            {
              successRooms &&(
              <Table className="categories">
                <thead>
                            <tr>
                              <th>Id</th>
                              <th>Name</th>
                              <th>Exposure</th>
                              <th>Temperature</th>
                              <th>Humidity</th>
                            </tr>
                            </thead>
                <tbody>
                {
                  rooms.map((item, index, arr) =>
                          (<Rooms room={item} key={index}/>)

                  )
                }</tbody>
              </Table>
            )}
          </div>
        </CardBody>
      </Card>
    )
  }
}


export default Rooms;