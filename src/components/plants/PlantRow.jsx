import React from 'react';

import PropTypes from 'prop-types';

import 'components/plants/PlantRow.scss';
import {
  faCheckCircle,
  faCloud,
  faCloudSun,
  faMoon,
  faQuestion,
  faSun,
  faThermometerEmpty,
  faThermometerFull,
  faThermometerHalf,
  faTimesCircle,
  faTint,
  faTintSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Plant from 'models/Plant';


const difficulties = {
  1: 'low',
  2: 'medium-low',
  3: 'medium',
  4: 'medium-high',
  5: 'high',
};

const appearances = {
  true: <FontAwesomeIcon icon={ faCheckCircle } />,
  false: <FontAwesomeIcon icon={ faTimesCircle } />,
};

const exposures = {
  dark: <FontAwesomeIcon icon={ faMoon } />,
  shade: <FontAwesomeIcon icon={ faCloud } />,
  partsun: <FontAwesomeIcon icon={ faCloudSun } />,
  fullsun: <FontAwesomeIcon icon={ faSun } />,
};

const humidities = {
  low: <div>
    <FontAwesomeIcon icon={ faTint } />
  </div>,
  medium: <div>
    <FontAwesomeIcon icon={ faTint } />
    <FontAwesomeIcon icon={ faTint } />
  </div>,
  high: <div>
    <FontAwesomeIcon icon={ faTint } />
    <FontAwesomeIcon icon={ faTint } />
    <FontAwesomeIcon icon={ faTint } />
  </div>,
};

const temperatures = {
  cold: <FontAwesomeIcon icon={ faThermometerEmpty } />,
  medium: <FontAwesomeIcon icon={ faThermometerHalf } />,
  warm: <FontAwesomeIcon icon={ faThermometerFull } />,
};


function secondsToDays(sec) {
  const dayInSeconds = 86400;
  if (sec < dayInSeconds) {
    return <FontAwesomeIcon icon={ faQuestion } />;
  } else {
    return Math.round(sec / dayInSeconds);
  }
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  if (dateString === null) {
    return <FontAwesomeIcon icon={ faTintSlash } />;
  } else {
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
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
    const { categories, index, plant, rooms } = this.props;
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
      wateringInterval
    } = plant;

    console.log(categoryId, categories);

    return (
      <tr>
        <td>{ index } </td>
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
    );
  }

}


PlantRow.propTypes = {
  plant: PropTypes.instanceOf(Plant).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  rooms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  index: PropTypes.number.isRequired,
};

export { exposures, humidities, temperatures, appearances };
export default PlantRow;
