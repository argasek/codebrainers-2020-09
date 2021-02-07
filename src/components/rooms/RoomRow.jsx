import React from "react";
import {exposures, humidities, temperatures, appearances} from "components/plants/PlantRow";


class RoomRow extends React.PureComponent {

  render() {
    const {
      id,
      name,
      exposure,
      temperature,
      humidity,
      draft,
    } = this.props.room;

    return (
      <tr>
        <td>{ id }</td>
        <td>{ name }</td>
        <td>{ exposures[exposure] }</td>
        <td>{ humidities[humidity] }</td>
        <td>{ temperatures[temperature] }</td>
        <td>{ appearances[draft] }</td>
      </tr>
    )
  }
}

export default RoomRow;
