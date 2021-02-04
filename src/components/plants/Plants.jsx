import {Card, CardBody, Table} from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {PlantRow, PlantSecondTable} from "components/plants/PlantRow";
import InProgress from "components/shared/InProgress";
import {RiCelsiusFill} from "react-icons/ri";
import Plant from "models/Plant";
import RoomPlain from "models/RoomPlain";


const PLANTS_FETCH_DELAY = 250;
const ROOMS_FETCH_DELAY = 250;

class Plants extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
      plantsSuccess: undefined,
      plantsInProgress: false,

      rooms: [],
      roomsSuccess: undefined,
      roomsInProgress: false,
    };
  }


  componentDidMount() {
    this.fetchPlants();
    this.fetchRooms();

  }


  fetchPlants() {
    const requestUrl = "http://gentle-tor-07382.herokuapp.com/plants/";
    this.setState({plantsInProgress: true});

    return this.props.delayFetch(PLANTS_FETCH_DELAY, (resolve, reject) => {
      const promise = axios.get(requestUrl);

      promise
              .then((response) => this.fetchPlantsSuccess(response, resolve))
              .catch((error) => this.fetchPlantsError(error, reject))
              .finally(() => this.setState({plantsInProgress: false}));
    });

  }
  fetchRooms() {
    const requestUrl = "http://gentle-tor-07382.herokuapp.com/rooms/";
    this.setState({roomsInProgress: true});

    return this.props.delayFetch(ROOMS_FETCH_DELAY, (resolve, reject) => {
      const promise = axios.get(requestUrl);

      promise
              .then((response) => this.fetchRoomsSuccess(response,resolve))
              .catch((error) => this.fetchRoomsError(error, reject))
              .finally(() => {
                this.setState({roomsInProgress: false});
              })
    });


  }

  fetchRoomsSuccess(response, resolve){
    const data = response.data;
    const rooms = data.map((item) => {
      const room = new RoomPlain();
      return room.fromPlain(item)
    });
    const roomsSuccess = true;
    this.setState({
      rooms,roomsSuccess
    });
    resolve();
  }
  fetchRoomsError(error, reject){
    this.setState({
      roomsSuccess: false
    });
    reject();
  }



  fetchPlantsSuccess(response, resolve) {
    const data = response.data;
    const plants = data.map((item) => {
      const plant = new Plant();
      return plant.fromPlain(item)
    });
    const plantsSuccess = true;
    this.setState({plants, plantsSuccess});
    resolve();
  }

  fetchPlantsError(error, reject) {
    this.setState({
      successPlants: false
    });
    reject();
  }

  render() {
    const {plants, plantsSuccess, plantsInProgress, rooms, roomsInProgress, roomsSuccess} = this.state;

    return (
            <Card className="mb-4">
              <CardBody>
                <InProgress inProgress={plantsInProgress}/>
                {
                  plantsSuccess === false &&
                  <p>Unable to fetch plants.</p>
                }
                {plantsSuccess && (
                        <>
                          <Table bordered>
                            <thead>
                            <tr>
                              <th className="solid-data" colSpan={"100%"}>Table 1 - solid data according to chosen
                                plants
                              </th>
                            </tr>
                            <tr>
                              <th colSpan={6}>Plant information</th>
                              <th className="table-mid-color" colSpan={5}>Requirements</th>

                            </tr>
                            <tr>
                              <th>Idx</th>
                              <th>Id</th>
                              <th>Name</th>
                              <th>Category</th>
                              <th>Difficulty</th>
                              <th>Blooming</th>


                              <th className="table-mid-color">Fertilizing Interval [days]</th>
                              <th className="table-mid-color">Watering Interval [days]</th>
                              <th className="table-mid-color">Sun Exposure</th>
                              <th className="table-mid-color">Required Temperature [ <RiCelsiusFill/> ]</th>
                              <th className="table-mid-color"> Required Humidity</th>

                            </tr>
                            </thead>
                            <tbody>
                            {
                              plants.map(
                                      (plant, index,arr) => (<PlantRow plant={plant} key={index} rooms={rooms} index={index + 1}/>)
                              )
                            }
                            </tbody>

                          </Table>


                          <Table bordered>
                            <thead>
                            <tr>
                              <th className="taking-care-records" colSpan={"100%"}>Table 2 - taking care of your plants
                                records
                              </th>
                            </tr>
                            <tr>
                              <th className="table-mid-color" colSpan={6}>Plant information</th>
                              <th colSpan={4}>Your actions</th>
                            </tr>
                            <tr>
                              <th className="table-mid-color">Idx</th>
                              <th className="table-mid-color">Id</th>
                              <th className="table-mid-color">Name</th>
                              <th className="table-mid-color">Rooms from rooms</th>
                              <th className="table-mid-color">Difficulty</th>
                              <th className="table-mid-color">Blooming</th>

                              <th>Last Fertilized</th>
                              <th>Days since last fertilizing</th>

                              <th>Last Watered</th>
                              <th>Days since last watering</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                              plants.map(
                                      (plant, index,arr) => (
                                              <PlantSecondTable plant={plant} key={index} rooms={rooms} index={index + 1}/>)
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

Plants.propTypes = {
  delayFetch: PropTypes.func.isRequired,
};

export default Plants;
