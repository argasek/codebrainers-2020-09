import React from 'react';
// import {FaAdjust, FaCircle, FaCloudSun, FaSun} from "react-icons/fa";
// import PropTypes from 'prop-types';
// import './Plant.scss';
// import {faSun, faCloudSun, faAdjust, faCircle} from "@fortawesome/free-solid-svg-icons";
import {FaSun, FaCloudSun, FaAdjust, FaCircle} from "react-icons/fa";
// import {GiFireFlower} from "react-icons/gi";
// import {ImLeaf} from "react-icons/im";

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

class Room extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {



    return (
            <tr>
              <td >{this.props.room.id} </td>
              <td >{this.props.room.name}</td>
              <td >{exposure[this.props.room.exposure]}</td>
              <td >{humidity[this.props.room.humidity]}</td>
              <td >{temp[this.props.room.temperature]}</td>
            </tr>
    )
  }

}
export default Room;