import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestion} from "@fortawesome/free-solid-svg-icons";


function dataExist(isData) {
  if (isData === null) {
    return <FontAwesomeIcon icon={faQuestion}/>;
  } else {
    return isData;
  }
}


class Room extends React.PureComponent {

  render() {

    return (
      <tr>
        <td>{ dataExist(this.props.room.room) }</td>
      </tr>
    )
  }
}

export default Room;
