import React from "react";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router-dom";
import {
  ROUTE_CATEGORIES,
  ROUTE_PLANTS,
  ROUTE_PREFERENCES,
  ROUTE_ROOMS,
  ROUTE_CALCULATOR, ROUTE_EXERCISE, ROUTE_ITEM1, ROUTE_ITEM2
} from "constants/Routes";
import Plants from "components/plants/Plants";
import Categories from "components/categories/Categories";
import Rooms from "components/rooms/Rooms";
import PlantCreate from 'components/plants/PlantCreate';
import Preferences from "components/preferences/Preferences";
import Exercise from "components/exercise/Exercise"
import Calculator from "components/exercise/Calculator";
import {Item1} from "components/exercise/Item1";
import {Item2} from "components/exercise/Item2";

class PlantasticContainer extends React.PureComponent {

  render() {
    const {
      delayFetch,
      fertilizingFrequency,
      inputOnChange,
      plantName,
      someSelectField,
      userFullName,
      userFullNameDelayed,
      handleUserFullNameChange,
      handleUserFullNameBlur,
      sortBy,
      sortDirection,
    } = this.props;

    return (
            <Container>
              <Switch>
                <Route exact path={ROUTE_PLANTS}>
                  <PlantCreate
                          fertilizingFrequency={fertilizingFrequency}
                          inputOnChange={inputOnChange}
                          plantName={plantName}
                          someSelectField={someSelectField}
                  />
                  <Plants
                          delayFetch={delayFetch}
                          sortBy={sortBy}
                          sortDirection={sortDirection}
                  />
                </Route>
                <Route path={ROUTE_CATEGORIES}>
                  <Categories
                          delayFetch={delayFetch}
                  />
                </Route>
                <Route path={ROUTE_ROOMS}>
                  <Rooms delayFetch={delayFetch}/>
                </Route>
                <Route path={ROUTE_PREFERENCES}>
                  <Preferences
                          userFullName={userFullName}
                          userFullNameDelayed={userFullNameDelayed}
                          handleUserFullNameChange={handleUserFullNameChange}
                          handleUserFullNameBlur={handleUserFullNameBlur}
                  />
                </Route>
                <Route path={ROUTE_EXERCISE}>
                  <Exercise/>
                </Route>
                <Route path={ROUTE_CALCULATOR}>
                  <Calculator/>
                </Route>
                <Route path={ROUTE_ITEM1}>
                  <Item1/>
                </Route>
                <Route path={ROUTE_ITEM2}>
                  <Item2/>
                </Route>

              </Switch>
            </Container>
    )
  }
}

export default PlantasticContainer;