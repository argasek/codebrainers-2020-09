import {Card, CardBody, Table} from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Plant from "components/plants/Plant";
import InProgress from "components/shared/InProgress";


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
                    id,
                    name,
                    category,
                    category_slug,
                    watering_interval,
                    fertilizing_interval,
                    required_exposure,
                    required_humidity,
                    required_temperature,
                    blooming,
                    difficulty,
                    room,
                    last_watered,
                    last_fertilized
                  } = item;
                  console.log(item);
                  return {
                    id,
                    name,
                    category,
                    category_slug,
                    watering_interval,
                    fertilizing_interval,
                    required_exposure,
                    required_humidity,
                    required_temperature,
                    blooming,
                    difficulty,
                    room,
                    last_watered,
                    last_fertilized
                  };

                });

                // console.log(plants);
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

                          <Table>
                            <thead>
                            <tr>
                              <th>Id</th>
                              <th>Name</th>
                              <th>Category</th>
                              <th>Category_slug</th>
                              <th>Watering interval</th>
                              <th>Fertilizing interval</th>
                              <th>Required exposure</th>
                              <th>Required humidity</th>
                              <th>Required temperature</th>
                              <th>Blooming</th>
                              <th>Difficulty</th>
                              <th>Room</th>
                              <th>Last watered</th>
                              <th>Last fertilized</th>

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
