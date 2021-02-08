import {Card, CardBody, Table} from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import InProgress from "components/shared/InProgress";
import Plant from "models/Plant";
import PlantsTable from "components/plants/PlantsTable";


const PLANTS_FETCH_DELAY = 100;
const ROOMS_FETCH_DELAY = 100;
const CATEGORIES_FETCH_DELAY = 100;

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

      categoriesInProgress: false,
      successCategories: undefined,
      categories: [],

      sortBy: "",
      sortDirection: true,


    };


  }


  componentDidMount() {
    this.fetchPlants();
    this.fetchRooms();
    this.fetchCategories();

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

  fetchCategories() {

    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/categories/';
    this.setState({categoriesInProgress: true});
    return this.props.delayFetch(CATEGORIES_FETCH_DELAY, (resolve, reject) => {
      axios.get(requestUrl)
              .then((response) => {
                const data = response.data;
                const categories = data.map((item) => ({name: item.name, id: item.id}));
                const successCategories = true;
                this.setState({categories, successCategories});
                resolve();
              })
              .catch((error) => {
                this.setState({successCategories: false});
                reject();
              })
              .finally(() => {
                this.setState({categoriesInProgress: false});
              })
    });
  }


  render() {
    const {
      plants, plantsSuccess, plantsInProgress, rooms, roomsInProgress,
      roomsSuccess, successCategories, categoriesInProgress, categories
    } = this.state;

    return (
            <Card className="mb-4">
              <CardBody>
                <InProgress inProgress={plantsInProgress || roomsInProgress || categoriesInProgress}/>
                {
                  plantsSuccess === false &&
                  <p>Unable to fetch plants.</p>
                }
                {plantsSuccess && successCategories && roomsSuccess && (


                            <PlantsTable
                                    plants={plants}
                                    categories={categories}
                                    rooms={rooms}
                            />



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
