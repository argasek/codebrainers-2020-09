import React from "react";
import {RiCelsiusFill} from "react-icons/ri";

class PlantsThead extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      plants: [],
    })


  }

  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
  clonePlants = () => this.state.plants.map(plant => plant);

 sortBy(key){
    const plants = this.clonePlants();
    plants.sort
 }

  render() {
    return (
            <thead>
            <tr>
              <th className="solid-data" colSpan={"100%"}>Plants Table
              </th>
            </tr>
            <tr>
              <th colSpan={7}>Plant information</th>
              <th className="table-mid-color" colSpan={8}>Requirements</th>
            </tr>
            <tr>
              <th
                      onClick={()=>this.sortBy(index)}
              >Idx</th>
              <th>Id
              </th>
              <th>Name</th>
              <th>Category</th>
              <th>Difficulty</th>
              <th>Blooming</th>
              <th>Room</th>


              <th className="table-mid-color">Fertilizing Interval [days]</th>
              <th className="table-mid-color">Watering Interval [days]</th>
              <th className="table-mid-color">Sun Exposure</th>
              <th className="table-mid-color">Required Temperature [ <RiCelsiusFill/> ]</th>
              <th className="table-mid-color"> Required Humidity</th>

              <th>Last Fertilized</th>
              <th>Days since last fertilizing</th>
            </tr>
            </thead>
    )
  }
}

export default PlantsThead;