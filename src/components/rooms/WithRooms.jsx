import React from "react";
import axios from "axios";

const ROOMS_FETCH_DELAY = 250;

const delayFetch = (ms, func) => {
  return new Promise((resolve, reject) => setTimeout(() => func(resolve, reject), ms));
}


const withRooms = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        rooms: [],
        roomsSuccess: undefined,
        roomsInProgress: false,
      }
    }

    fetchRooms = () => {
      const requestUrl = "http://gentle-tor-07382.herokuapp.com/rooms/";
      this.setState({roomsInProgress: true});

      return delayFetch(ROOMS_FETCH_DELAY, (resolve, reject) => {
        return axios.get(requestUrl)
          .then((response) => {
            const data = response.data;
            const rooms = data.map((item) => {
              const {
                id,
                name,
                exposure,
                temperature,
                humidity,
                draft,
              } = item;
              return {
                id,
                name,
                exposure,
                temperature,
                humidity,
                draft,
              }
            });
            const roomsSuccess = true;
            this.setState({rooms, roomsSuccess});
            resolve();
          })
          .catch((error) => {
            this.setState({roomsSuccess: false});
            reject();
          })
      }).finally(() => {
        this.setState({roomsInProgress: false});
      })
    }

    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          fetchRooms={this.fetchRooms}
        />
      )
    }
  }
}

export default withRooms;
