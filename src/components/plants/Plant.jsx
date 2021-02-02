import React from 'react';
// import PropTypes from 'prop-types';
import './Plant.scss';
// import {faSun, faCloudSun, faAdjust, faCircle} from "@fortawesome/free-solid-svg-icons";
import {FaSun, FaCloudSun, FaAdjust, FaCircle} from "react-icons/fa";
import {GiFireFlower} from "react-icons/gi";
import {ImLeaf} from "react-icons/im";
import moment from "moment";

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
const rooms ={
  1:"Living room",
  2:"Bedroom",
  3:"Dinning room",
  4:"Kids bedroom",
  5:"Bathroom",

}


// I take timestamps given in API as a seconds wise,
// though it is probably milisec, just to get reasonable outcome.
const secToDays = 84400;

export class Plant extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    return (
            <tr>
              <td>{this.props.index}</td>
              <td>{this.props.plant.id} </td>
              <td>{this.props.plant.name}</td>
              <td>{this.props.plant.category_slug}_id = {this.props.plant.category}</td>
              <td>{difficulties[this.props.plant.difficulty]}</td>
              <td>{this.props.plant.blooming ? <GiFireFlower/> : <ImLeaf/>}</td>

              <td className="table-mid-color">{Math.ceil(this.props.plant.fertilizing_interval / secToDays)}</td>
              <td className="table-mid-color">{Math.ceil(this.props.plant.watering_interval / secToDays)}</td>
              <td className="table-mid-color">{exposure[this.props.plant.required_exposure]}</td>
              <td className="table-mid-color">{temp[this.props.plant.required_temperature]}</td>
              <td className="table-mid-color">{humidity[this.props.plant.required_humidity]}</td>

            </tr>
    )
  }

}

export class PlantSecondTable extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
            <tr>
              <td className="table-mid-color">{this.props.index}</td>
              <td className="table-mid-color">{this.props.plant.id} </td>
              <td className="table-mid-color">{this.props.plant.name}</td>
              <td className="table-mid-color">{rooms[this.props.plant.room]}</td>
              <td className="table-mid-color">{difficulties[this.props.plant.difficulty]}</td>
              <td className="table-mid-color">{this.props.plant.blooming ? <GiFireFlower/> : <ImLeaf/>}</td>


              <td>{moment(this.props.plant.last_fertilized).format("MMM Do YY")}</td>
              <td>{moment(this.props.plant.last_fertilized).startOf("day").fromNow()}</td>

              <td>{moment(this.props.plant.last_watered).format("MMM Do YY")}</td>
              <td>{moment(this.props.plant.last_watered).startOf("day").fromNow()}</td>


            </tr>

    )
  }

}
export {temp,humidity,exposure};


