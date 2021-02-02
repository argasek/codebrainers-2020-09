import React from 'react';
// import PropTypes from 'prop-types';
import './Plant.scss';
import {
  faMoon, faCloud, faCloudSun, faSun,
  faThermometerEmpty, faThermometerHalf, faThermometerFull,
  faCheckCircle, faTimesCircle,
  faTint, faTintSlash,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const difficulties = {
  1: 'low',
  2: 'medium-low',
  3: 'medium',
  4: 'medium-high',
  5: 'high',
}

const appearances = {
  true:   <FontAwesomeIcon icon={faCheckCircle}/>,
  false:  <FontAwesomeIcon icon={faTimesCircle}/>,
}

const exposures = {
  dark:     <FontAwesomeIcon icon={faMoon}/>,
  shade:    <FontAwesomeIcon icon={faCloud}/>,
  partsun:  <FontAwesomeIcon icon={faCloudSun}/>,
  fullsun:  <FontAwesomeIcon icon={faSun}/>,
}

const humidities = {
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

const temperatures = {
  cold:   <FontAwesomeIcon icon={faThermometerEmpty}/>,
  medium: <FontAwesomeIcon icon={faThermometerHalf}/>,
  warm:   <FontAwesomeIcon icon={faThermometerFull}/>,
}


function secondsToDays(sec) {
  const dayInSeconds = 86400;
  if (sec < dayInSeconds) {
    return <FontAwesomeIcon icon={faQuestion}/>;
  } else {
    return Math.round(sec / dayInSeconds);
  }
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" }
  if (dateString === null) {
    return <FontAwesomeIcon icon={faTintSlash}/>;
  } else {
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
}


class Plant extends React.PureComponent {

  render() {

    return (
      <tr>
        <td>{ this.props.plant.id } </td>
        <td>{ this.props.plant.name }</td>
        <td>{ this.props.plant.category }</td>
        <td>{ this.props.plant.category_slug }</td>
        <td>{ secondsToDays(this.props.plant.watering_interval) }</td>
        <td>{ secondsToDays(this.props.plant.fertilizing_interval) }</td>
        <td>{ exposures[this.props.plant.required_exposure] }</td>
        <td>{ humidities[this.props.plant.required_humidity] }</td>
        <td>{ temperatures[this.props.plant.required_temperature] }</td>
        <td>{ appearances[this.props.plant.blooming] }</td>
        <td>{ difficulties[this.props.plant.difficulty] }</td>
        <td>{ this.props.plant.room }</td>
        <td>{ formatDate(this.props.plant.last_watered) }</td>
        <td>{ formatDate(this.props.plant.last_fertilized) }</td>
      </tr>
    )
  }

}



// Plant.propTypes = {
//   plant: PropTypes.instanceOf(Plant).isRequired,
// };
export { exposures, humidities, temperatures, appearances };
export default Plant;
