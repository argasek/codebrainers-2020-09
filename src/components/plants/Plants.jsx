import React from "react";
import axios from "axios";

import "./Plants.scss"

import InProgress from "components/shared/InProgress";
import {Card, CardBody, Table} from "reactstrap";

import PropTypes from "prop-types";
import PlantRow from "components/plants/PlantRow";
import Plant from "models/Plant";
import Room from "models/Room";


const CATEGORIES_FETCH_DELAY = 500;
const PLANTS_FETCH_DELAY = 250;
const ROOMS_FETCH_DELAY = 250;


class Plants extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categoriesSuccess: undefined,
      categoriesInProgress: false,

      plants: [],
      plantsSuccess: undefined,
      plantsInProgress: false,

      rooms: [],
      roomsSuccess: undefined,
      roomsInProgress: false,
    };
  }


  componentDidMount() {
    this.fetchCategories();
    this.fetchPlants();
    this.fetchRooms();
  }


  fetchCategories() {
    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/categories/';
    this.setState({ categoriesInProgress: true });

    return this.props.delayFetch(CATEGORIES_FETCH_DELAY, (resolve, reject) => {
      const promise = axios.get(requestUrl);

      promise
        .then((response) => this.fetchCategoriesSuccess(response, resolve))
        .catch((error) => this.fetchCategoriesError(error, reject))
        .finally(() => {
          this.setState({categoriesInProgress: false});
        });
    });
  }

  fetchPlants() {
    const requestUrl = "http://gentle-tor-07382.herokuapp.com/plants/";
    this.setState({plantsInProgress: true});

    return this.props.delayFetch(PLANTS_FETCH_DELAY, (resolve, reject) => {
      const promise = axios.get(requestUrl);

      promise
        .then((response) => this.fetchPlantsSuccess(response, resolve))
        .catch((error) => this.fetchPlantsError(error, reject))
        .finally(() => {
          this.setState({plantsInProgress: false});
        });
    });
  }

  fetchRooms() {
    const requestUrl = "http://gentle-tor-07382.herokuapp.com/rooms/";
    this.setState({roomsInProgress: true});

    return this.props.delayFetch(ROOMS_FETCH_DELAY, (resolve, reject) => {
      const promise = axios.get(requestUrl);

      promise
        .then((response) => this.fetchRoomsSuccess(response, resolve))
        .catch((error) => this.fetchRoomsError(error, reject))
        .finally(() => {
          this.setState({roomsInProgress: false});
        })
    });
  }


  fetchCategoriesSuccess(response, resolve) {
    const data = response.data;
    const categories = data.map((item) => ({ name: item.name, id: item.id }));
    const categoriesSuccess = true;
    this.setState({ categories, categoriesSuccess });
    resolve();
  }

  fetchPlantsSuccess(response, resolve) {
    const data = response.data;
    const plants = data.map((item) => {
      const plant = new Plant();
      return plant.fromPlain(item);
    });
    const plantsSuccess = true;
    this.setState({plants, plantsSuccess});
    resolve();
  }

  fetchRoomsSuccess(response, resolve) {
    const data = response.data;
    const rooms = data.map((item) => {
      const room = new Room();
      return room.fromPlain(item);
    });
    const roomsSuccess = true;
    this.setState({rooms, roomsSuccess});
    resolve();
  }


  fetchCategoriesError(error, reject) {
    this.setState({ categoriesSuccess: false });
    reject();
  }

  fetchPlantsError(error, reject) {
    this.setState({plantsSuccess: false});
    reject();
  }

  fetchRoomsError(error, reject) {
    this.setState({roomsSuccess: false});
    reject();
  }


  render() {
    const {
      categories,
      plants,
      rooms,
      categoriesSuccess,
      plantsSuccess,
      roomsSuccess,
      categoriesInProgress,
      plantsInProgress,
      roomsInProgress,
    } = this.state;

    return (
      <Card className="mb-4">
        <CardBody>
          <InProgress inProgress={ categoriesInProgress || plantsInProgress || roomsInProgress }/>
          {
            plantsSuccess === false &&
            <p>Unable to fetch plants.</p>
          }
          {
            categoriesSuccess && plantsSuccess && roomsSuccess && (
            <div className="plants-container">
              <Table>
                <thead className="plants-container-header">
                  <tr>
                    <th>No.</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Category Slug</th>
                    <th>Watering Interval</th>
                    <th>Fertilizing Interval</th>
                    <th>Required Exposure</th>
                    <th>Required Humidity</th>
                    <th>Required Temperature</th>
                    <th>Blooming</th>
                    <th>Difficulty</th>
                    <th>Room</th>
                    <th>Last Watered</th>
                    <th>Last Fertilized</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    plants.map((plant, index, arr) => (
                      <PlantRow
                        categories={categories}
                        plant={plant}
                        rooms={rooms}
                        key={index}
                        index={index + 1}
                      />
                    ))
                  }
                </tbody>
              </Table>
            </div>
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
