import React from "react";
import {RiCelsiusFill} from "react-icons/ri";

class PlantsThead extends React.Component {
  constructor(props) {
    super(props);


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
              <th>Idx</th>
              <th id='id'
                  onClick={this.props.handlePlantColumnSort}
              >Id
              </th>
              <th id="name"
                  onClick={this.props.handlePlantColumnSort}
              >Name
              </th>
              <th id="categorySlug"
                  onClick={this.props.handlePlantColumnSort}
              >Category
              </th>
              <th id="difficulty"
                  onClick={this.props.handlePlantColumnSort}
              >Difficulty
              </th>
              <th id="blooming"
                  onClick={this.props.handlePlantColumnSort}
              >Blooming
              </th>
              <th id="roomId"
                  onClick={this.props.handlePlantColumnSort}
              >Room
              </th>


              <th id="fertilizingInterval"
                  onClick={this.props.handlePlantColumnSort}
                  className="table-mid-color">Fertilizing Interval [days]
              </th>
              <th id="wateringInterval"
                  onClick={this.props.handlePlantColumnSort}
                  className="table-mid-color">Watering Interval [days]
              </th>
              <th id="requiredExposure"
                  onClick={this.props.handlePlantColumnSort}
                  className="table-mid-color">Sun Exposure
              </th>
              <th id="requiredTemperature"
                  onClick={this.props.handlePlantColumnSort}
                  className="table-mid-color">Required Temperature [ <RiCelsiusFill/> ]
              </th>
              <th id="requiredExposure"
                  onClick={this.props.handlePlantColumnSort}
                  className="table-mid-color"> Required Humidity
              </th>

              <th id="lastFertilized"
                      onClick={this.props.handlePlantColumnSort}
                      className="table-mid-color"
              >Last Fertilized
              </th>
              <th id="lastWatered"
                      onClick={this.props.handlePlantColumnSort}
                      className="table-mid-color"
              >Days since last fertilizing</th>
            </tr>
            </thead>
    )
  }
}

export default PlantsThead;