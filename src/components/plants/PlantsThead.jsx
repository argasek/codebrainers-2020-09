import React from "react";
import {RiCelsiusFill} from "react-icons/ri";
import {Button} from "reactstrap";

class PlantsThead extends React.Component {
  constructor(props) {
    super(props);


  }


  render() {
    return (
            <thead>
            <tr>
              <th className="solid-data" colSpan={"100%"}>
                <Button outline color="secondary" size="lg" onClick={this.props.handleReset}
                >reset sort criteria</Button>
                <div className='alert-info'>Sorting doesn't work properly.Sorts data based on criteria "beneath", instead displayed values</div>
                Plants Table
              </th>
            </tr>
            <tr>
              <th colSpan={7}>Plant information</th>
              <th className="table-mid-color" colSpan={8}>Requirements</th>
            </tr>
            <tr>
              <th className="alert"
              >Idx</th>
              <th id='id'
                  onClick={this.props.handlePlantColumnSort}
              >Id
              </th>
              <th id="name"
                  onClick={this.props.handlePlantColumnSort}
              >Name
              </th>
              <th className="alert" id="categorySlug"
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
              <th className="alert" id="roomId"
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
              <th
                      id="requiredExposure"
                  onClick={this.props.handlePlantColumnSort}
                  className="table-mid-color alert">Sun Exposure
              </th>
              <th id="requiredTemperature"
                  onClick={this.props.handlePlantColumnSort}
                  className="table-mid-color alert" >Required Temperature [ <RiCelsiusFill/> ]
              </th>
              <th id="requiredHumidity"
                  onClick={this.props.handlePlantColumnSort}
                  className="table-mid-color alert"> Required Humidity
              </th>

              <th id="lastFertilized"
                  onClick={this.props.handlePlantColumnSort}
                  className="table-mid-color"
              >Last Fertilized
              </th>
              <th id="lastWatered"
                  onClick={this.props.handlePlantColumnSort}
                  className="table-mid-color"
              >Days since last fertilizing
              </th>
            </tr>
            </thead>
    )
  }
}

export default PlantsThead;