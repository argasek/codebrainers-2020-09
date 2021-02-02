import React from 'react';
import moment from "moment";

// import PropTypes from 'prop-types';
import './Plant.scss';
import {faCheckSquare, faSquare, faSun, faCloudSun, faCloud, faCloudMoon,
  faTint, faTemperatureLow, faTemperatureHigh, faHome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const difficulties ={
  1:'low',
  2:'medium-low',
  3:'medium',
  4:"medium-high",
  5:"high"
}

const blooming = {
  true : <FontAwesomeIcon icon={faCheckSquare}/>,
  false : <FontAwesomeIcon icon={faSquare}/>
};
const required_exposure={
  fullsun: <FontAwesomeIcon icon={faSun}/>,
  partsun: <FontAwesomeIcon icon={faCloudSun}/>,
  dark: <FontAwesomeIcon icon={faCloud}/>,
  shade: <FontAwesomeIcon icon={faCloudMoon} />,

}
const required_humidity={
  low: <FontAwesomeIcon icon={faTint} size={"1x"} color={"blue"}/>,
  medium:<FontAwesomeIcon icon={faTint} size={"2x"} color={"blue"}/> ,
  high: <FontAwesomeIcon icon={faTint} size={"3x"} color={"blue"}/>,

}

const required_temperature={
  cold: <FontAwesomeIcon icon={faTemperatureLow}  color={"blue"}/>,
  medium:<FontAwesomeIcon icon={faTemperatureLow}  color={"green"}/> ,
  warm: <FontAwesomeIcon icon={faTemperatureHigh}  color={"red"}/>,
}
/*
const room={
  null: "N/A",
  1: <FontAwesomeIcon icon={faHome} color={"green"}/>,
  2: <FontAwesomeIcon icon={faHome} size={"2x"} color={"green"}/>,
}
*/


class Plant extends React.PureComponent {



  render() {

    return (
      <tr>
        <td>{ this.props.plant.id } </td>
        <td>{ this.props.plant.name }</td>
        <td>{ difficulties[this.props.plant.difficulty]}</td>
        <td>{ blooming[this.props.plant.blooming] }</td>
        <td>{ this.props.plant.category }</td>
        <td>{ this.props.plant.category_slug }</td>
        <td>{ this.props.plant.fertilizing_interval}</td>
        <td>{ moment(this.props.plant.last_fertilized ).format('LLLL')}</td>
        <td>{ moment(this.props.plant.last_watered ).format('LLLL')}</td>
        <td>{ required_exposure[this.props.plant.required_exposure]}</td>
        <td>{ required_humidity[this.props.plant.required_humidity]}</td>
        <td>{ required_temperature[this.props.plant.required_temperature] }</td>
        <td>{ this.props.plant.room }</td>
        <td>{ this.props.plant.watering_interval }</td>

      </tr>
    )
  }

}



// Plant.propTypes = {
//   plant: PropTypes.instanceOf(Plant).isRequired,
// };

export default Plant;