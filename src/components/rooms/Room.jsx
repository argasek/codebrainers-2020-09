import React from "react";
import Plant from "components/plants/Plant"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";


const draft_appear = {
  true:   <FontAwesomeIcon icon={faCheckCircle}/>,
  false:  <FontAwesomeIcon icon={faTimesCircle}/>,
}


class Room extends React.PureComponent {

  render() {

    return (
      <tr>
        <td>{ this.props.room.id }</td>
        <td>{ this.props.room.name }</td>
        <td>{ this.props.room.exposure }</td>
        <td>{ this.props.room.humidity }</td>
        <td>{ this.props.room.temperature }</td>
        <td>{ draft_appear[this.props.room.draft] }</td>
      </tr>
    )
  }
}

export default Room;
