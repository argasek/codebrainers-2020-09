import React from 'react';
import PropTypes from 'prop-types';
import './Plant.scss';
// import {faSun, faCloudSun, faAdjust, faCircle} from "@fortawesome/free-solid-svg-icons";
import {FaSun, FaCloudSun, FaAdjust, FaCircle} from "react-icons/fa";
import {GiFireFlower} from "react-icons/gi";
import {ImLeaf} from "react-icons/im";
import moment from "moment";
import Plant from 'models/Plant';

const difficulties = {
  1: "very easy",
  2: 'easy ',
  3: 'medium',
  4: "quite needy",
  5: "a lot of attention"
}
const exposure = {
  "partsun": <FaCloudSun/>,
  "fullsun": <FaSun/>,
  "shade": <FaAdjust/>,
  "dark": <FaCircle/>
}

const temp = {
  "warm": "25 - 35 ",
  "cold": "10 - 20",
  "medium": "20 - 25 "
}
const humidity = {
  "low": " below 30%",
  "medium": " between 30%-60%",
  "high": "over 60%",
}


// I take timestamps given in API as a seconds wise,
// though it is probably milisec, just to get reasonable outcome.
const secToDays = 84400;

const getRoomName = (rooms, roomId) => {
  const index = rooms.findIndex((room) => room.id === roomId);
  if (index < 0) {
    return "no rooms assigned"
  }
  return rooms[index].name;
}

const getCategoryName = (categories, categoryID) => {
  const index = categories.findIndex((category => category.id === categoryID));
  if (index < 0) {
    return "no matching category"
  }
  return categories[index].name;
}


class PlantRow extends React.PureComponent {
  constructor(props) {
    super(props);
  }


  render() {
    const {index, plant, rooms, categories} = this.props;

    const {
      blooming,
      categoryId,
      roomId,
      difficulty,
      fertilizingInterval,
      id,
      name,
      requiredExposure,
      requiredHumidity,
      requiredTemperature,
      wateringInterval,
      lastFertilized,
      lastWatered,


    } = plant;


    return (
            <tr>
              <td >{index}</td>
              <td>{id} </td>
              <td>{name}</td>
              <td>{getCategoryName(categories, categoryId)}</td>
              <td>{difficulties[difficulty]}</td>
              <td>{blooming ? <GiFireFlower/> : <ImLeaf/>}</td>
              <td>{getRoomName(rooms, roomId)}</td>

              <td className="table-mid-color">{Math.ceil(fertilizingInterval / secToDays)}</td>
              <td className="table-mid-color">{Math.ceil(wateringInterval / secToDays)}</td>
              <td className="table-mid-color">{exposure[requiredExposure]}</td>
              <td className="table-mid-color">{temp[requiredTemperature]}</td>
              <td className="table-mid-color">{humidity[requiredHumidity]}</td>
              <td className="table-mid-color">{moment(lastFertilized).format("MMM Do YY")}</td>
              <td className="table-mid-color">{moment(lastWatered).format("MMM Do YY")}</td>


            </tr>
    )
  }

}


PlantRow.propTypes = {
  plant: PropTypes.instanceOf(Plant).isRequired,
  index: PropTypes.number.isRequired,
  // rooms: PropTypes.arrayOf(PropTypes.shape({
  //   // id: PropTypes.number.isRequired,
  //   name: PropTypes.string.isRequired,
  // })).isRequired,
}

export {temp, humidity, exposure};
export default PlantRow;

