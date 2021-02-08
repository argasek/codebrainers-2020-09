import React from "react";
import {Table} from "reactstrap";
import PlantRow from "components/plants/PlantRow";
import PlantsThead from "components/plants/PlantsThead";

class PlantsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      sortDirection: true,
      sortBy: '',
    };

  }

  handlePlantColumnSort= (event) => {
    const sortBy = event.target.id;
    this.setState({
      sortBy: sortBy,
      sortDirection: !this.state.sortDirection,

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

    return (
            <div className="plants-container">
              <Table bordered>
                <PlantsThead
                        handlePlantColumnSort={this.handlePlantColumnSort}

                />
                <tbody>
                {
                  sortDirection ? sortedAsc : sortedDesc

                }


                </tbody>

              </Table>
            </div>
    )
  }
}

export default PlantsTable;