import React from 'react';
// import PropTypes from 'prop-types';
import './Plant.scss';


const difficulties = {
  1: 'low',
  2: 'medium-low',
  3: 'medium',
  4: "medium-high",
  5: "high"
};
const bloomings=
        {
          true : 'Is blooming',
          false : 'Not blooming'
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
              <td>{bloomings[this.props.plant.blooming]}</td>
              <td>{difficulties[this.props.plant.difficulty]}</td>
              <td>{this.props.plant.room}</td>
              <td>{this.props.plant.last_watered}</td>
              <td>{this.props.plant.last_fertilized}</td>
            </tr>
    )
  }

}


// Plant.propTypes = {
//   plant: PropTypes.instanceOf(Plant).isRequired,
// };

export default Plant;