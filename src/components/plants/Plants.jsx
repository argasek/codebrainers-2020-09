import {Card, CardBody, Table} from "reactstrap";
import React from "react";
import "./Plants.scss";
import PropTypes from "prop-types";
import axios from "axios";
import PlantRow from "components/plants/PlantRow";
import InProgress from "components/shared/InProgress";
import Plant from 'models/Plant';

const CATEGORIES_FETCH_DELAY = 100;
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

      sortBy: 'name',
      sorted: 'asc',
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

  onSort = (sortBy) => {
    const {sorted} = this.state;
    let nextSort;

    if (sorted === 'desc') nextSort = 'asc';
    else nextSort = 'desc';

    this.setState({
      sorted: nextSort,
      sortBy: sortBy,
    });
  }

  render() {
    const {
      rooms,
      roomsInProgress,
      roomsSuccess,
      categories,
      categoriesInProgress,
      categoriesSuccess,
      plants,
      plantsSuccess,
      plantsInProgress,
      sorted,
      sortBy,
    } = this.state;


    console.log({
      plantsSuccess, categoriesSuccess, roomsSuccess
    });

    const sortDirections = {
      asc: {
        class: 'up',
        compareFunc: (a, b) => {
          if (a[sortBy] > b[sortBy]) return 1;
          if (a[sortBy] < b[sortBy]) return -1;
          return 0;
        }
      },
      desc: {
        class: 'down',
        compareFunc: (a, b) => {
          if (a[sortBy] < b[sortBy]) return 1;
          if (a[sortBy] > b[sortBy]) return -1;
          return 0;
        }
      },
    };

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
                                <th onClick={() => this.onSort('id')}
                                    className={sortDirections[sorted].class}>Id
                                </th>
                                <th onClick={() => this.onSort('name')}
                                    className={sortDirections[sorted].class}>Name
                                </th>
                                <th onClick={() => this.onSort('categorySlug')}
                                    className={sortDirections[sorted].class}>Category
                                </th>
                                <th onClick={() => this.onSort('wateringInterval')}
                                    className={sortDirections[sorted].class}>Watering Interval
                                </th>
                                <th onClick={() => this.onSort('fertilizingInterval')}
                                    className={sortDirections[sorted].class}>Fertilizing Interval
                                </th>
                                <th>Required Exposure</th>
                                <th>Required Humidity</th>
                                <th>Required Temperature</th>
                                <th>Blooming</th>
                                <th onClick={() => this.onSort('difficulty')}
                                    className={sortDirections[sorted].class}>Difficulty
                                </th>
                                <th onClick={() => this.onSort('roomId')}
                                    className={sortDirections[sorted].class}>Room
                                </th>
                                <th>Last Watered</th>
                                <th>Last Fertilized</th>
                              </tr>
                              </thead>
                              <tbody>
                              {
                                [...plants].sort(sortDirections[sorted].compareFunc).map((plant, index, arr) => (
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
