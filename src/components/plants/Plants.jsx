import { Card, CardBody, Table } from "reactstrap";
import React from "react";
import "./Plants.scss";
import PropTypes from "prop-types";
import axios from "axios";
import PlantRow from "components/plants/PlantRow";
import InProgress from "components/shared/InProgress";
import Plant from 'models/Plant';
import Room from "models/Room";

const CATEGORIES_FETCH_DELAY = 500;
const PLANTS_FETCH_DELAY = 100;
const ROOMS_FETCH_DELAY = 100;


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
      currentSort: 'up',
    };
  }


  componentDidMount() {
    this.fetchCategories();
    this.fetchPlants();
    this.fetchRooms();
  }


  fetchCategories() {
    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/categories/';
    this.setState({categoriesInProgress: true});

    return this.props.delayFetch(CATEGORIES_FETCH_DELAY, (resolve, reject) => {
      const promise = axios.get(requestUrl);

      promise
        .then((response) => this.fetchCategoriesSuccess(response, resolve))
        .catch((error) => this.fetchCategoriesError(error, reject))
        .finally(() => this.setState({categoriesInProgress: false}));
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
        .then((response) => this.fetchRoomsSuccess(response, resolve))
        .catch((error) => this.fetchRoomsError(error, reject))
        .finally(() => this.setState({roomsInProgress: false}));
    });
  }


  fetchCategoriesSuccess(response, resolve) {
    const data = response.data;
    const categories = data.map((item) => ({name: item.name, id: item.id}));
    const categoriesSuccess = true;
    this.setState({categories, categoriesSuccess});
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


  fetchPlantsError(error, reject) {
    this.setState({plantsSuccess: false});
    reject();
  }

  fetchCategoriesError(erroor, reject) {
    this.setState({categoriesSuccess: false});
    reject();
  }

  fetchRoomsError(error, reject) {
    this.setState({roomsSuccess: false});
    reject();
  }


  onSortChange = (sortBy) => {
		const { currentSort } = this.state;
		let nextSort;

		if (currentSort === 'down') nextSort = 'up';
		else if (currentSort === 'up') nextSort = 'down';

		this.setState({
			currentSort: nextSort,
      sortBy: sortBy
		});
	};


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
      currentSort,
      sortBy,
    } = this.state;


    const sortTypes = {
      up: {
        class: 'sort-up',
        compareFunc: (a, b) => {
          if (a[sortBy] > b[sortBy]) return 1;
          if (a[sortBy] < b[sortBy]) return -1;
          return 0;
        }
      },
      down: {
        class: 'sort-down',
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
                <InProgress inProgress={ plantsInProgress || categoriesInProgress || roomsInProgress } />
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
                                <th onClick={() => this.onSortChange('id')}
                                    className={sortTypes[currentSort].class}>Id</th>
                                <th onClick={() => this.onSortChange('name')}
                                    className={sortTypes[currentSort].class}>Name</th>
                                <th onClick={() => this.onSortChange('categorySlug')}
                                    className={sortTypes[currentSort].class}>Category</th>
                                <th onClick={() => this.onSortChange('wateringInterval')}
                                    className={sortTypes[currentSort].class}>Watering Interval</th>
                                <th onClick={() => this.onSortChange('fertilizingInterval')}
                                    className={sortTypes[currentSort].class}>Fertilizing Interval</th>
                                <th>Required Exposure</th>
                                <th>Required Humidity</th>
                                <th>Required Temperature</th>
                                <th>Blooming</th>
                                <th onClick={() => this.onSortChange('difficulty')}
                                    className={sortTypes[currentSort].class}>Difficulty</th>
                                <th onClick={() => this.onSortChange('roomId')}
                                    className={sortTypes[currentSort].class}>Room</th>
                                <th>Last Watered</th>
                                <th>Last Fertilized</th>
                              </tr>
                              </thead>
                              <tbody>
                              {
                                [...plants].sort(sortTypes[currentSort].compareFunc).map((plant, index, arr) => (
                                    <PlantRow
                                      categories={categories}
                                      rooms={rooms}
                                      plant={ plant }
                                      key={ index }
                                      index={index + 1}
                                    />
                                ))
                              }
                              </tbody>
                            </Table>
                          </div>
                  ) }
              </CardBody>
            </Card>
    );
  }
}

Plants.propTypes = {
  delayFetch: PropTypes.func.isRequired,
};

export default Plants;
