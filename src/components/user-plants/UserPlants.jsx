import React from "react";
import { Table } from "reactstrap";
import UserPlant from "components/user-plants/UserPlant";
// import { plantsPropTypes } from 'proptypes/PlantsPropTypes';

/**
 * This is an example of JSDoc comment.
 *
 * @param {UserPlant[]} userPlants Array of userPlants
 * @param {Plant[]} plants Array of plants
 * @param {Category[]} categories Array of categories
 * @param {Room[]} categories Array of categories
 * @param {function} onEdit Callback invoked on row click
 * @returns {*}
 */
const UserPlants = ({ userPlants, ...rest }) => {
  console.log(userPlants);
  return (
    <Table hover striped responsive>
      <thead className="thead-dark">
      <tr>
        <th>Name</th>
        <th>Type of Plant</th>
        <th>Category of Plant</th>
        <th>Exposure</th>
        <th>Humidity</th>
        <th>Temperature</th>
        <th>Blooming</th>
        <th>Difficulty</th>
        <th>Room</th>
        <th>Last Fertilized</th>
        <th>Last Watered</th>
      </tr>
      </thead>
      <tbody>
      {
        userPlants.map((userPlant) => (
          <UserPlant
            key={ userPlant.id }
            userPlant={ userPlant }
            { ...rest }
          />
        ))
      }
      </tbody>
    </Table>
  );
};

// UserPlants.propTypes = plantsPropTypes;

export default UserPlants;
