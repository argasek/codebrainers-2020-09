import React from 'react';
import PropTypes from 'prop-types';
import Plant from "models/Plant";
import 'components/plants/PlantRow.scss';

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
  }
  return Math.round(sec / dayInSeconds);
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" }
  if (dateString === null) {
    return <FontAwesomeIcon icon={faTintSlash}/>;
  }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

const getCategoryName = (categories, categoryId) => {
  const index = categories.findIndex((category) => category.id === categoryId);
  if (index < 0) {
    return '¯\\_(ツ)_/¯';
  }
  return categories[index].name;
}

const getRoomName = (rooms, roomId) => {
  const index = rooms.findIndex((room) => room.id === roomId);
  if (index < 0) {
    return '¯\\_(ツ)_/¯';
  }
  return rooms[index].name;
}


class PlantRow extends React.PureComponent {

  render() {
    const { categories, plant, rooms, index, } = this.props;
    const {
      blooming,
      categoryId,
      categorySlug,
      difficulty,
      fertilizingInterval,
      id,
      lastFertilized,
      lastWatered,
      name,
      requiredExposure,
      requiredHumidity,
      requiredTemperature,
      roomId,
      wateringInterval,
    } = plant;

    return (
      <tr>
        <td>{ index }</td>
        <td>{ id } </td>
        <td>{ name }</td>
        <td>{ getCategoryName(categories, categoryId) }</td>
        <td>{ categorySlug }</td>
        <td>{ secondsToDays(wateringInterval) }</td>
        <td>{ secondsToDays(fertilizingInterval) }</td>
        <td>{ exposures[requiredExposure] }</td>
        <td>{ humidities[requiredHumidity] }</td>
        <td>{ temperatures[requiredTemperature] }</td>
        <td>{ appearances[blooming] }</td>
        <td>{ difficulties[difficulty] }</td>
        <td>{ getRoomName(rooms, roomId) }</td>
        <td>{ formatDate(lastWatered) }</td>
        <td>{ formatDate(lastFertilized) }</td>
      </tr>
    )
  }

}


PlantRow.propTypes = {
  plant: PropTypes.instanceOf(Plant).isRequired,
  index: PropTypes.number.isRequired,
};

export { exposures, humidities, temperatures, appearances };
export default PlantRow;
