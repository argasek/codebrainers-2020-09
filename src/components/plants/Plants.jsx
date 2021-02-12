import { Card, CardBody, Table } from "reactstrap";
import React from "react";
import "./Plants.scss";
import PropTypes from "prop-types";
import axios from "axios";
import PlantRow from "components/plants/PlantRow";
import InProgress from "components/shared/InProgress";
import Plant from 'models/Plant';

const CATEGORIES_FETCH_DELAY = 50;
const ROOMS_FETCH_DELAY = 100;
const PLANTS_FETCH_DELAY = 100;

class Plants extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categoriesInProgress: false,
      categoriesSuccess: undefined,

      plants: [],
      plantsSuccess: undefined,
      plantsInProgress: false,

      rooms: [],
      roomsSuccess: undefined,
      roomsInProgress: false,
      sortType: 'desc',
    };
  }

  componentDidMount() {
    this.fetchPlants();
    this.fetchRooms();
    this.fetchCategories();
  }

  fetchCategories() {
    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/categories/';
    this.setState({categoriesInProgress: true});
    return this.props.delayFetch(CATEGORIES_FETCH_DELAY, (resolve, reject) => {
      axios.get(requestUrl)
              .then((response) => {
                const data = response.data;
                const categories = data.map((item) => ({name: item.name, id: item.id}));
                const categoriesSuccess = true;
                this.setState({categories, categoriesSuccess});
                resolve();
              })
              .catch((error) => {
                this.setState({categoriesSuccess: false});
                reject();
              })
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
              .finally(() => this.setState({plantsInProgress: false}));
    });
  }

  fetchRooms() {
    const requestUrl = "http://gentle-tor-07382.herokuapp.com/rooms/";
    this.setState({roomsInProgress: true});

    return this.props.delayFetch(ROOMS_FETCH_DELAY, (resolve, reject) => {
      const promise = axios.get(requestUrl);

      promise
              .then((response) => {
                const data = response.data;
                const rooms = data.map((item) => {
                  const {
                    id,
                    name,
                    exposure,
                    temperature,
                    humidity,
                    draft,
                  } = item;
                  return {
                    id,
                    name,
                    exposure,
                    temperature,
                    humidity,
                    draft,
                  }
                });
                const roomsSuccess = true;
                this.setState({rooms, roomsSuccess});
                resolve();
              })
              .catch((error) => {
                this.setState({roomsSuccess: false});
                reject();
              })
              .finally(() => {
                this.setState({roomsInProgress: false});
              })
    });
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

  fetchPlantsError(error, reject) {
    this.setState({plantsSuccess: false});
    reject();
  }
  onSort= sortType =>{
    this.setState({sortType});
  }

  render() {
    const {
      sortType,
      rooms,
      roomsInProgress,
      roomsSuccess,
      categories,
      categoriesInProgress,
      categoriesSuccess,
      plants,
      plantsSuccess,
      plantsInProgress,

    } = this.state;
    const sorted = plants.sort((a, b) => {
      const isReversed = (sortType === 'asc') ? 1 : -1;
      return isReversed  * a.name.localeCompare(b.name);
    });


    return (
            <Card className="mb-4">
              <CardBody>
                <InProgress inProgress={plantsInProgress || categoriesInProgress || roomsInProgress}/>
                {
                  plantsSuccess === false &&
                  <p>Unable to fetch plants.</p>
                }
                {
                  plantsSuccess && categoriesSuccess && roomsSuccess && (
                          <div className="plants-container">
                            <Table>
                              <thead className="plants-container-header">
                              <tr>
                                <th>No.</th>
                                <th>Id</th>
                                <th><button className="button" onClick={()=>this.onSort('asc')}>Sort By Asc</button><button className="button" onClick={()=>this.onSort('desc')}>Sort By Desc</button>Name</th>
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
                                                rooms={rooms}
                                                plant={plant}
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
