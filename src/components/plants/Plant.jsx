import React from 'react';
// import PropTypes from 'prop-types';
import './Plant.scss';
import {
  faCloud, faCloudSun, faMoon, faSun,
  faThermometerEmpty, faThermometerHalf, faThermometerFull,
  faCheckCircle, faTimesCircle,
  faTint,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const difficulties = {
  1: 'low',
  2: 'medium-low',
  3: 'medium',
  4: 'medium-high',
  5: 'high',
}

const bloom_appear = {
  true:   <FontAwesomeIcon icon={faCheckCircle}/>,
  false:  <FontAwesomeIcon icon={faTimesCircle}/>,
}

const exposure = {
  dark:     <FontAwesomeIcon icon={faMoon}/>,
  shade:    <FontAwesomeIcon icon={faCloud}/>,
  partsun:  <FontAwesomeIcon icon={faCloudSun}/>,
  fullsun:  <FontAwesomeIcon icon={faSun}/>,
}

const humidity = {
  low:    <div>
            <FontAwesomeIcon icon={faTint}/>
          </div>,
  medium: <div>
            <FontAwesomeIcon icon={faTint}/>
            <FontAwesomeIcon icon={faTint}/>
          </div>,
  high:   <div>
            <FontAwesomeIcon icon={faTint}/>
            <FontAwesomeIcon icon={faTint}/>
            <FontAwesomeIcon icon={faTint}/>
          </div>,
}

const temperature = {
  cold:   <FontAwesomeIcon icon={faThermometerEmpty}/>,
  medium: <FontAwesomeIcon icon={faThermometerHalf}/>,
  warm:   <FontAwesomeIcon icon={faThermometerFull}/>,
}

class Plant extends React.PureComponent {

  render() {

    return (
      <tr>
        <td>{ this.props.plant.id } </td>
        <td>{ this.props.plant.name }</td>
        <td>{ this.props.plant.category }</td>
        <td>{ this.props.plant.category_slug }</td>
        <td>{ this.props.plant.watering_interval }</td>
        <td>{ this.props.plant.fertilizing_interval }</td>
        <td>{ exposure[this.props.plant.required_exposure] }</td>
        <td>{ humidity[this.props.plant.required_humidity] }</td>
        <td>{ temperature[this.props.plant.required_temperature] }</td>
        <td>{ bloom_appear[this.props.plant.blooming] }</td>
        <td>{ difficulties[this.props.plant.difficulty] }</td>
        <td>{ this.props.plant.room }</td>
        <td>{ this.props.plant.last_watered }</td>
        <td>{ this.props.plant.last_fertilized }</td>
      </tr>
    )
  }

}



// Plant.propTypes = {
//   plant: PropTypes.instanceOf(Plant).isRequired,
// };

export default Plant;
