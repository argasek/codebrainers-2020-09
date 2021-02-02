import React from 'react';
// import PropTypes from 'prop-types';
import './Plant.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faThermometerEmpty,
  faThermometerHalf,
  faThermometerFull,
  faCloud,
  faSun,
  faCloudSun,
  faTint,
  faTimesCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";


const difficulties = {
  1: 'low',
  2: 'medium-low',
  3: 'medium',
  4: "medium-high",
  5: "high"
}

let lowTintIcon = (
        <div>
          <FontAwesomeIcon icon={faTint}/>
        </div>
)

let mediumTintIcon = (
        <div>
          <FontAwesomeIcon icon={faTint}/>
          <FontAwesomeIcon icon={faTint}/>
        </div>
)

let highTintIcon = (
        <div>
          <FontAwesomeIcon icon={faTint}/>
          <FontAwesomeIcon icon={faTint}/>
          <FontAwesomeIcon icon={faTint}/>
        </div>
)


const humidities = {
  'low': lowTintIcon,
  'medium': mediumTintIcon,
  'high': highTintIcon,
}

let coldTempIcon = (
        <div>
          <FontAwesomeIcon icon={faThermometerEmpty}/>
        </div>
)

let mediumTempIcon = (
        <div>
          <FontAwesomeIcon icon={faThermometerHalf}/>
        </div>
)

let warmTempIcon = (
        <div>
          <FontAwesomeIcon icon={faThermometerFull}/>
        </div>
)

const temperatures = {
  'cold': coldTempIcon,
  'medium': mediumTempIcon,
  'warm': warmTempIcon,
}

let darkExpIcon = (
        <div>
          <FontAwesomeIcon icon={faCloud}/>
          <FontAwesomeIcon icon={faCloud}/>
        </div>
)

let shadeExpIcon = (
        <div>
          <FontAwesomeIcon icon={faCloud}/>
        </div>
)

let partSunExpIcon = (
        <div>
          <FontAwesomeIcon icon={faCloudSun}/>
        </div>
)

let fullSunExpIcon = (
        <div>
          <FontAwesomeIcon icon={faSun}/>
        </div>
)

const exposures = {
  'dark': darkExpIcon,
  'shade': shadeExpIcon,
  'partsun': partSunExpIcon,
  'fullsun': fullSunExpIcon,
}

function dateConverter(someDate) {
  if (someDate != null) {
    let year = someDate.substring(0, 4);
    let month = someDate.substring(5, 7);
    let day = someDate.substring(8, 10);
    let hour = someDate.substring(11, 13);
    let minute = someDate.substring(14, 16);

    return (day + '/' + month + '/' + year + ' ' + hour + ':' + minute);
  } else {
    return "no data";
  }

}

function intervalConverter(miliseconds) {
  const timeInHours = Math.floor(parseInt(miliseconds) / 1000 / 60)
  if (timeInHours < 0.1) {
    return 'no data'
  } else {
    return timeInHours + ' h'
  }

}

const bloomingIcon = (
        <div>
          <FontAwesomeIcon icon={faCheckCircle}/>
        </div>
)
const noBloomingIcon = (
        <div>
          <FontAwesomeIcon icon={faTimesCircle}/>
        </div>
)


function isBlooming(isBlooming) {
  if (isBlooming === true) {
    return bloomingIcon;
  } else {
    return noBloomingIcon
  }
}

function categorySlugFormatter(categorySlug) {
  let noHyphenString = categorySlug.replace("-", " ");
  return noHyphenString.substring(0, 1).toUpperCase() + noHyphenString.substring(1)

}

class Plant extends React.PureComponent {


  render() {

    return (
            <tr>
              <td>{this.props.plant.id} </td>
              <td>{this.props.plant.name}</td>
              <td>{this.props.plant.category}</td>
              <td>{categorySlugFormatter(this.props.plant.category_slug)}</td>
              <td>{intervalConverter(this.props.plant.watering_interval)}</td>
              <td>{intervalConverter(this.props.plant.fertilizing_interval)}</td>
              <td>{exposures[this.props.plant.required_exposure]}</td>
              <td>{humidities[this.props.plant.required_humidity]}</td>
              <td>{temperatures[this.props.plant.required_temperature]}</td>
              <td>{isBlooming(this.props.plant.blooming)}</td>
              <td>{difficulties[this.props.plant.difficulty]}</td>
              <td>{this.props.plant.room}</td>
              <td>{dateConverter(this.props.plant.last_watered)}</td>
              <td>{dateConverter(this.props.plant.last_fertilized)}</td>


            </tr>
    )
  }

}


export default Plant;