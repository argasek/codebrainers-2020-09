import React from 'react';
// import PropTypes from 'prop-types';
import './Plant.scss';
import {faCog, faCheck, faBan} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import moment from "moment";


const difficulties = {
  1: 'low',
  2: 'medium-low',
  3: 'medium',
  4: "medium-high",
  5: "high"
};
const bloomings=
        {
          true : <FontAwesomeIcon icon={faCheck}/>,
          false : <FontAwesomeIcon icon={faBan}/>
        };



class Plant extends React.PureComponent {


  render() {

    return (
            <tr>
              <td>{this.props.plant.id} </td>
              <td>{this.props.plant.name}</td>
              <td>{this.props.plant.category}</td>
              <td>{this.props.plant.category_slug}</td>
              <td>{Math.ceil(this.props.plant.watering_interval / 86400)}</td>
              <td>{Math.ceil(this.props.plant.fertilizing_interval / 86400)}</td>
              <td>{this.props.plant.required_exposure}</td>
              <td>{this.props.plant.required_humidity}</td>
              <td>{this.props.plant.required_temperature}</td>
              <td>{bloomings[this.props.plant.blooming]}</td>
              <td>{difficulties[this.props.plant.difficulty]}</td>
              <td>{this.props.plant.room}</td>
              <td>{moment(this.props.plant.last_watered).format("YYYY-MM-DD")}</td>
              <td>{moment(this.props.plant.last_fertilized).format("YYYY-MM-DD")}</td>
            </tr>
    )
  }

}


// Plant.propTypes = {
//   plant: PropTypes.instanceOf(Plant).isRequired,
// };

export default Plant;