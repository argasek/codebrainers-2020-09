import { Card, CardBody } from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Plant from "components/plants/Plant";
import InProgress from "components/shared/InProgress";

const PLANTS_FETCH_DELAY = 2500;

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
    this.setState({ inProgress: true });

    // debugger;

    return this.props.delayFetch(PLANTS_FETCH_DELAY, (resolve, reject) => {
      const promise = axios.get(requestUrl);

      promise
        .then((response) => {

          // debugger;

          const data = response.data;
          const plants = data.map((item) => {
            const { id, name } = item;
            return { id, name };
          });
          const successPlants = true;
          this.setState({ plants, successPlants });
          resolve();
        })
        .catch((error) => {

          // debugger;

          this.setState({ successPlants: false });
          reject();
        })
        .finally(() => {
            this.setState({ inProgress: false });
        })
    });


  }

  render() {
    const { plants, successPlants, inProgress } = this.state;

    return (
      <Card className="mb-4">
        <CardBody>
          <InProgress inProgress={inProgress} />
          {
            successPlants === false &&
            <p>Unable to fetch plants.</p>
          }
          {successPlants && (
            <div className="plants">
              <h1>Plants:</h1>
              {plants.map((plant, index, arr) => (
                <Plant plant={plant} key={index} />
              ))}
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
