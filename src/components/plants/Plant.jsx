import React from 'react';
// import PropTypes from 'prop-types';
import './Plant.scss';


const difficulties = {
  1: 'low',
  2: 'medium-low',
  3: 'medium',
  4: "medium-high",
  5: "high"
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

class Plant extends React.PureComponent {


  render() {

    return (
            <tr>
              <td>{this.props.plant.id} </td>
              <td>{this.props.plant.name}</td>
              <td>{this.props.plant.category}</td>
              <td>{this.props.plant.category_slug}</td>
              <td>{this.props.plant.watering_interval}</td>
              <td>{this.props.plant.fertilizing_interval}</td>
              <td>{this.props.plant.required_exposure}</td>
              <td>{this.props.plant.required_humidity}</td>
              <td>{this.props.plant.required_temperature}</td>
              <td>{this.props.plant.blooming}</td>
              <td>{difficulties[this.props.plant.difficulty]}</td>
              <td>{this.props.plant.room}</td>
              <td>{dateConverter(this.props.plant.last_watered)}</td>
              <td>{dateConverter(this.props.plant.last_fertilized)}</td>


            </tr>
    )
  }

}


// Plant.propTypes = {
//   plant: PropTypes.instanceOf(Plant).isRequired,
// };

export default Plant;