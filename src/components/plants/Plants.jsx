import {Card, CardBody, Table} from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {PlantRow, PlantSecondTable} from "components/plants/PlantRow";
import InProgress from "components/shared/InProgress";
import {RiCelsiusFill} from "react-icons/ri";
import Plant from "models/Plant";
import {FaAngleDoubleUp, FaAngleDoubleDown} from "react-icons/fa";


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

      sortBy: "getRoomName(rooms, roomId)",
      sortDirection: true,
      index: undefined,
      sortIndexDirection: false,
      sortByIndex: "",


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


  handlePlantColumnNameAsc = (event) => {
    const sortBy = event.target.value;
    console.log(event.target)
    this.setState({
      sortBy: sortBy,
      sortDirection: true,
    });
  }
  handlePlantColumnNameDesc = (event) => {
    const sortBy = event.target.id;
    this.setState({
      sortBy: sortBy,
      sortDirection: false,
    });
  }


  render() {
    const {
      plants, plantsSuccess, plantsInProgress, rooms, roomsInProgress,
      roomsSuccess, successCategories, categoriesInProgress, categories, sortDirection, sortBy
    } = this.state;
    // console.log(plants);

    console.log(plants);

    const sortedAsc = plants.sort((item1, item2) => {
      const a = item1[sortBy];
      const b = item2[sortBy];
      if (a > b) {
        return 1;
      }
      if (b > a) {
        return -1;
      }
      return 0;

    }).map(
            (plant, index, arr) => (
                    <PlantRow plant={plant} categories={categories} key={index}
                              rooms={rooms}
                              index={index + 1}/>)
    );
    const sortedDesc = plants.sort((item1, item2) => {
      const a = item1[sortBy];
      const b = item2[sortBy];
      if (a < b) {
        return 1;
      }
      if (b < a) {
        return -1;
      }
      return 0;

    }).map(
            (plant, index, arr) => (
                    <PlantRow plant={plant} categories={categories} key={index}
                              rooms={rooms}
                              index={index + 1}/>)
    );


    return (
            <Card className="mb-4">
              <CardBody>
                <InProgress inProgress={plantsInProgress || roomsInProgress || categoriesInProgress}/>
                {
                  plantsSuccess === false &&
                  <p>Unable to fetch plants.</p>
                }
                {plantsSuccess && successCategories && roomsSuccess && (
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
                              <th id='id'
                                  onClick={this.handlePlantColumnNameAsc}
                                  onDoubleClick={this.handlePlantColumnNameDesc}
                              >Id
                              </th>
                              <th id="name"
                                  onClick={this.handlePlantColumnNameAsc}
                                  onDoubleClick={this.handlePlantColumnNameDesc}
                              >Name
                              </th>
                              <th id="categorySlug"
                                  onClick={this.handlePlantColumnNameAsc}
                                  onDoubleClick={this.handlePlantColumnNameDesc}
                              >Category
                              </th>
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
                              sortDirection ? sortedAsc : sortedDesc

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
                              <th className="table-mid-color"
                                  onClick={this.handlePlantColumnNameAsc}
                                  onDoubleClick={this.handlePlantColumnNameDesc}

                              >Rooms from rooms
                              </th>
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
                                      (plant, index, arr) => (
                                              <PlantSecondTable plant={plant} key={index} rooms={rooms}
                                                                index={index + 1}/>)
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
