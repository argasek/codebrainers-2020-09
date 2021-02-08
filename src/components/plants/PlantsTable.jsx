import React from "react";
import {Table} from "reactstrap";
import PlantRow from "components/plants/PlantRow";
import PlantsThead from "components/plants/PlantsThead";

class PlantsTable extends React.Component {
  constructor(props) {
    super(props);


  }





  render() {
    const {plants, categories, rooms, } = this.props

    console.log(plants);
    return (
            <div className="plants-container">
              <Table bordered>
                <PlantsThead/>
                <tbody>
                {
                  plants.map(
                          (plant, index, arr) => (
                                  <PlantRow plant={plant} categories={categories} key={index}
                                            rooms={rooms}
                                            index={index + 1}/>)



                  )}


                </tbody>

              </Table>
            </div>
    )
  }
}

export default PlantsTable;