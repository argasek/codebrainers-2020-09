import React from "react";
import {Table, Button} from "reactstrap";
import PlantRow from "components/plants/PlantRow";
import PlantsThead from "components/plants/PlantsThead";

class PlantsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      sortDirection: true,
      sortBy: 'id',
    };

  }

  handlePlantColumnSort= (event) => {
    const sortBy = event.target.id;
    this.setState({
      sortBy: sortBy,
      sortDirection: !this.state.sortDirection,

    });
  }
  handleReset = () => {
    this.setState({
      sortDirection:undefined,
      sortBy:"id",

    });
  }


  render() {
    const {plants, categories, rooms, } = this.props;
    const {sortDirection, sortBy} = this.state;

    const sortedAsc = plants.sort((item1, item2) => {
      const a = item1[sortBy];
      const b = item2[sortBy];
      if (a > b) {
        return 1;
      }
      if (b > a) {
        return -1;
      }
      return 0;

    }).map(
            (plant, index, arr) => (
                    <PlantRow plant={plant} categories={categories} key={index}
                              rooms={rooms}
                              index={index + 1}/>)
    );

    const sortedDesc = plants.sort((item1, item2) => {
      const a = item1[sortBy];
      const b = item2[sortBy];
      if (a < b) {
        return 1;
      }
      if (b < a) {
        return -1;
      }
      return 0;

    }).map(
            (plant, index, arr) => (
                    <PlantRow plant={plant} categories={categories} key={index}
                              rooms={rooms}
                              index={index + 1}/>)
    );




    let sorted;
    if(sortDirection===false){
       sorted = sortedDesc;
    } else {
      sorted = sortedAsc;
    }



    return (
            <div className="plants-container">

              <Table bordered>
                <PlantsThead
                        handlePlantColumnSort={this.handlePlantColumnSort}
                        handleReset ={this.handleReset}

                />
                <tbody>

                {/*{sortDirection ? sortedAsc : sortedDesc}*/}
                {sorted}






                </tbody>

              </Table>
            </div>
    )
  }
}

export default PlantsTable;