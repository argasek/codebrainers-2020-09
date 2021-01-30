import React from 'react';
// import PropTypes from 'prop-types';
import './Plant.scss';


const difficulties ={
  1:'low',
  2:'medium-low',
  3:'medium',
  4:"medium-high",
  5:"high"
}

class Plant extends React.PureComponent {



  render() {

    return (
      <tr>
        <td>{ this.props.plant.id } </td>
        <td>{ this.props.plant.name }</td>
        <td>{difficulties[this.props.plant.difficulty]}</td>


      </tr>
    )
  }

}



// Plant.propTypes = {
//   plant: PropTypes.instanceOf(Plant).isRequired,
// };

export default Plant;