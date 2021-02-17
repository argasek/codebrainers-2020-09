import React from "react";
import axios from "axios";
import {delay, PLANTS_FETCH_DELAY} from "shared/Debug";
import Plant from 'models/Plant';
import {classToPlain, plainToClass} from 'serializers/Serializer';
import withCategories from 'components/categories/Categories';
import withRooms from 'components/rooms/Rooms';
import {withRoomsPropTypes} from 'proptypes/RoomsPropTypes';
import {withCategoriesPropTypes} from 'proptypes/CategoriesPropTypes';
import PlantFormCard from 'components/plants/PlantFormCard';
import {Api} from 'services/Api';
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';
import {generatePath, matchPath, Route, Switch, withRouter} from 'react-router-dom';
import Routes from 'constants/Routes';
import PlantList from 'components/plants/PlantList';
import memoize from 'lodash-es/memoize';

class PlantsPage extends React.PureComponent {
  state = {
    plants: [],
    plantsErrorMessage: undefined,
    plantsSuccess: undefined,
    plantsInProgress: false,
    createPlantErrorMessage: "",
    updatePlantErrorMessage: "",
  };

  componentDidMount() {
    const roomsPromise = this.props.fetchRooms();
    const categoriesPromise = this.props.fetchCategories();
    const plantsPromise = this.fetchPlantsDelayed();

    plantsPromise
      .then(() => this.updateInitialValuesFromLocation(this.props.location));

    this.setState({plantsInProgress: true});

    const additionalPromises = Promise.all([
      roomsPromise,
      categoriesPromise,
      plantsPromise,
    ]);

    additionalPromises
      .finally(() => this.setState({plantsInProgress: false}));

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {location} = this.props;
    if (prevProps.location !== location) {
      this.updateInitialValuesFromLocation(location);
    }
  }

  updateInitialValuesFromLocation = (location) => {
    const options = {
      exact: false,
      strict: false
    };

    const {pathname} = location;

    const editPath = matchPath(pathname, {...options, path: Routes.PLANTS_EDIT});
    const createPath = matchPath(pathname, {...options, path: Routes.PLANTS_CREATE});

    const getInitialValues = memoize(PlantFormFields.getInitialValues);

    if (editPath !== null) {
      const plantId = +editPath.params.plantId;
      const plants = this.state.plants;
      const plant = plants.find((item) => item.id === plantId);
      const initialValues = getInitialValues(plant);
      this.setState({initialValues});
    }

    if (createPath !== null) {
      const plant = new Plant();
      const initialValues = getInitialValues(plant);
      this.setState({initialValues});
    }

  };

  fetchPlants = (resolve, reject) => {
    return axios.get(Api.PLANTS)
      .then((response) => {
        const data = response.data;

        const plants = data
          .map(item => plainToClass(Plant, item));

        const plantsErrorMessage = '';
        const plantsSuccess = true;
        this.setState({
          plants,
          plantsSuccess,
          plantsErrorMessage,
        });
        console.log('Fetched plants');
        resolve();
      })
      .catch((error) => {
        const plantsErrorMessage = error.message;
        const plantsSuccess = false;
        this.setState({
          plantsErrorMessage,
          plantsSuccess,
        });
        reject();
      });
  };

  fetchPlantsDelayed() {
    console.log('Method PlantsContainer.fetchPlantsDelayed() fired');
    return delay(PLANTS_FETCH_DELAY, this.fetchPlants);
  }

  navigateToPlantList = () => {
    this.props.history.push(Routes.PLANTS);

  };

  onSubmitPlantCreateSuccess = () => {
    this.navigateToPlantList();
  }

  /**
   * @param {Plant} plant
   */
  onSubmitPlantCreate = (plant) => {
    console.warn('Created plant:');
    console.log(plant);
    const path = generatePath(Routes.PLANTS);

    axios.post(Api.PLANTS, classToPlain(plant))
      .then((response) => {
        const data = response.data;
        const plant = plainToClass(Plant, data);
        const plants = [...this.state.plants];
        plants.push(plant);
        this.setState({plants: plants});
        this.props.history.push(path);
      })
      .catch((error) => {
        const plantsErrorMessage = "Error creating plant";
        this.props.history.push(path);
        this.setState({
          createPlantErrorMessage: plantsErrorMessage,
        });
      });
  };

  /**
   * @param {Plant} plant
   */
  onSubmitPlantUpdate = (plant) => {
    console.warn('Edited plant:');
    console.log(plant);
    const path = generatePath(Routes.PLANTS);

    axios.put(Api.PLANTS + plant.id + '/', classToPlain(plant))
      .then((response) => {
        const data = response.data;
        const plant = plainToClass(Plant, data);
        const plants = [...this.state.plants];
        const getIndex = plants.findIndex(item => item.id === plant.id);
        plants[getIndex] = plant;
        this.setState({plants: plants});
        this.props.history.push(path);
      })
      .catch((error) => {
        const plantsErrorMessage = "Error updating plant";
        this.props.history.push(path);
        this.setState({
          updatePlantErrorMessage: plantsErrorMessage,
        });
      });
  };

  onSubmit = (plant, routeProps) => {
    debugger;
  };

  onEdit = (plantId) => {
    const path = generatePath(Routes.PLANTS_EDIT, {plantId});
    this.props.history.push(path);
  };

  render() {
    const {
      initialValues,
      plants,
      plantsErrorMessage,
      plantsInProgress,
      plantsSuccess,
      createPlantErrorMessage,
    } = this.state;

    const {
      categories,
      categoriesSuccess,
      rooms,
      roomsSuccess
    } = this.props;

    const success = categoriesSuccess && plantsSuccess && roomsSuccess;

    return (
      <Switch>
        <Route
          exact
          path={Routes.PLANTS}
          render={() =>
            <React.Fragment>
              {
                createPlantErrorMessage !== "" && <p>{createPlantErrorMessage}</p>
              }

              <PlantList
                categories={categories}
                onEdit={this.onEdit}
                plants={plants}
                plantsErrorMessage={plantsErrorMessage}
                plantsInProgress={plantsInProgress}
                plantsSuccess={plantsSuccess}
                rooms={rooms}
                success={success}
              />

            </React.Fragment>
          }
        />
        <Route
          path={[Routes.PLANTS_CREATE]}
          render={() => (
            <PlantFormCard
              categories={categories}
              formLabel="Create new plant"
              initialValues={initialValues}
              onSubmit={this.onSubmitPlantCreate}
              rooms={rooms}
            />
          )}
        />
        <Route
          path={Routes.PLANTS_EDIT}
          render={() => (
            <PlantFormCard
              categories={categories}
              formLabel="Edit plant"
              initialValues={initialValues}
              onSubmit={this.onSubmitPlantUpdate}
              rooms={rooms}
            />
          )}
        />
      </Switch>
    );
  }
}

PlantsPage.propTypes = {
  ...withRoomsPropTypes,
  ...withCategoriesPropTypes,
};

export default withRooms(withCategories(withRouter(PlantsPage)));

// const plants = [ ...this.state.plants ];
// plants.unshift(plant);
// this.setState({ plants });

// const data = classToPlain(plant);
// return axios.post(Api.PLANTS, data)
//   .then(this.onSubmitPlantCreateSuccess)
//   .catch(this.onSubmitPlantCreateError)
