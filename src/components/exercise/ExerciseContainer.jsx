import React from "react";
import Exercise from "components/exercise/Exercise";
import Calculator from "components/exercise/Calculator";
import {ROUTE_CALCULATOR,ROUTE_EXERCISE} from "constants/Routes";
import{Container} from "reactstrap";
import {Switch,Route} from "react-router-dom";


class ExerciseContainer extends React.PureComponent{
  constructor(props) {
    super(props);
  }
  render() {
    return(
            <Container>
              <Switch>
                <Route exact path={ROUTE_EXERCISE}>
                  <Exercise/>
                </Route>
                <Route path={ROUTE_CALCULATOR}>
                  <Calculator/>
                </Route>
              </Switch>


            </Container>

    )
  }
}
export default ExerciseContainer;