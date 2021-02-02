import React from "react";

class Room extends React.PureComponent {

  render() {

    return (
      <tr>
        <td>{ this.props.room.room }</td>
      </tr>
    )
  }
}

export default Room;
