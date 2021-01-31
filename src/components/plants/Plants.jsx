import {Card, CardBody, Table} from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {Plant,PlantSecondTable} from "components/plants/Plant";
import InProgress from "components/shared/InProgress";
import {RiCelsiusFill} from "react-icons/ri";
// import moment from "moment";


const PLANTS_FETCH_DELAY = 250;

class Plants extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
      successPlants: undefined,
      inProgress: false,
    };
  }


  componentDidMount() {
    this.fetchPlants();
  }


  fetchPlants() {
    const requestUrl = "http://gentle-tor-07382.herokuapp.com/plants/";
    this.setState({inProgress: true});

    // debugger;


    return this.props.delayFetch(PLANTS_FETCH_DELAY, (resolve, reject) => {
      const promise = axios.get(requestUrl);

      promise
              .then((response) => {

                // debugger;

                const data = response.data;
                const plants = data.map((item) => {
                  const {
                    id, name, difficulty, blooming, category, category_slug, fertilizing_interval, last_fertilized,
                    last_watered, required_exposure, required_humidity, required_temperature, room, watering_interval
                  } = item;
                  // console.log(item.last_watered);

                  // this.lastWatered = item.last_watered;
                  // console.log(this.lastWatered);


                  return {
                    id, name, difficulty, blooming, category, category_slug, fertilizing_interval, last_fertilized,
                    last_watered, required_exposure, required_humidity, required_temperature, room, watering_interval
                  };


                });


                const successPlants = true;
                this.setState({plants, successPlants});
                resolve();
              })
              .catch((error) => {

                // debugger;

                this.setState({successPlants: false});
                reject();
              })
              .finally(() => {
                this.setState({inProgress: false});
              })
    });


  }


  render() {
    const {plants, successPlants, inProgress} = this.state;
    // const dateWatered = this.lastWatered
    // console.log(dateWatered);


    // let date = new Date(lastWatered);
    // let newDateFormat = date.toLocaleDateString();
    // console.log(newDateFormat);


    return (
            <Card className="mb-4">
              <CardBody>
                <InProgress inProgress={inProgress}/>
                {
                  successPlants === false &&
                  <p>Unable to fetch plants.</p>
                }
                {successPlants && (
                        <>
                          {/*<div>*/}
                          {/*  <p> timestamp: {dateWatered}</p>*/}
                          {/*</div>*/}

                          <Table bordered>
                            <thead>
                            <tr>
                              <th  className="solid-data"  colSpan={"100%"}>Table 1 - solid data according to chosen plants</th>
                            </tr>
                            <tr>
                              <th colSpan={6}>Plant information</th>
                              <th className="table-mid-color" colSpan={5}>Requirements</th>

                            </tr>
                            <tr>
                              <th>Id</th>
                              <th>Name</th>
                              <th>Category+Slug</th>
                              <th>Difficulty</th>
                              <th>Blooming</th>
                              <th>Room</th>

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
                                      (plant, index, arr) => (<Plant plant={plant} key={index}/>)
                              )
                            }
                            </tbody>

                          </Table>



                          <Table  bordered>
                            <thead>
                             <tr>
                              <th className="taking-care-records" colSpan={"100%"}>Table 2 - taking care of your plants records </th>
                            </tr>
                            <tr>
                              <th className="table-mid-color"  colSpan={5}>Plant information</th>
                              <th colSpan={4}>Your actions</th>
                            </tr>
                            <tr>
                              <th className="table-mid-color">Id</th>
                              <th className="table-mid-color">Name</th>
                              <th className="table-mid-color"> Category+Slug</th>
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
                                      (plant, index, arr) => (<PlantSecondTable plant={plant} key={index}/>)
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
