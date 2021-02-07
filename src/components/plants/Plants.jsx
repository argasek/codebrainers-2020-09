import { Card, CardBody, Table } from 'reactstrap';
import React from 'react';
import './Plants.scss';
import PropTypes from 'prop-types';
import axios from 'axios';
import PlantRow from 'components/plants/PlantRow';
import InProgress from 'components/shared/InProgress';
import Plant from 'models/Plant';
import PlantsTableHeaderCell from 'components/plants/PlantsTableHeaderCell';
import {
  PLANT_SORT_KEY_BLOOMING,
  PLANT_SORT_KEY_CATEGORY_ID,
  PLANT_SORT_KEY_DIFFICULTY,
  PLANT_SORT_KEY_FERTILIZING_INTERVAL,
  PLANT_SORT_KEY_ID,
  PLANT_SORT_KEY_NAME,
  PLANT_SORT_KEY_REQUIRED_EXPOSURE,
  PLANT_SORT_KEY_REQUIRED_HUMIDITY,
  PLANT_SORT_KEY_REQUIRED_TEMPERATURE,
  PLANT_SORT_KEY_ROOM_ID,
  PLANT_SORT_KEY_WATERING_INTERVAL
} from 'constants/PlantConstants';

const CATEGORIES_FETCH_DELAY = 100;
const ROOMS_FETCH_DELAY = 100;
const PLANTS_FETCH_DELAY = 100;

class Plants extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      categories: [],
      categoriesInProgress: false,
      categoriesSuccess: undefined,

      plants: [],
      plantsSuccess: undefined,
      plantsInProgress: false,

      rooms: [],
      roomsSuccess: undefined,
      roomsInProgress: false,

      sortKey: undefined
    };
  }

  componentDidMount () {
    this.fetchPlants();
    this.fetchRooms();
    this.fetchCategories();
  }

  fetchCategories () {
    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/categories/';
    this.setState({ categoriesInProgress: true });
    return this.props.delayFetch(CATEGORIES_FETCH_DELAY, (resolve, reject) => {
      axios.get(requestUrl)
      .then((response) => {
        const data = response.data;
        const categories = data.map((item) => ({ name: item.name, id: item.id }));
        const categoriesSuccess = true;
        this.setState({ categories, categoriesSuccess });
        resolve();
      })
      .catch((error) => {
        this.setState({ categoriesSuccess: false });
        reject();
      })
      .finally(() => {
        this.setState({ categoriesInProgress: false });
      });
    });
  }

  fetchPlants () {
    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/plants/';
    this.setState({ plantsInProgress: true });

    return this.props.delayFetch(PLANTS_FETCH_DELAY, (resolve, reject) => {
      const promise = axios.get(requestUrl);

      promise
      .then((response) => this.fetchPlantsSuccess(response, resolve))
      .catch((error) => this.fetchPlantsError(error, reject))
      .finally(() => this.setState({ plantsInProgress: false }));
    });
  }

  fetchRooms () {
    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/rooms/';
    this.setState({ roomsInProgress: true });

    return this.props.delayFetch(ROOMS_FETCH_DELAY, (resolve, reject) => {
      const promise = axios.get(requestUrl);

      promise
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
          };
        });
        const roomsSuccess = true;
        this.setState({ rooms, roomsSuccess });
        resolve();
      })
      .catch((error) => {
        this.setState({ roomsSuccess: false });
        reject();
      })
      .finally(() => {
        this.setState({ roomsInProgress: false });
      });
    });
  }

  fetchPlantsSuccess (response, resolve) {
    const data = response.data;
    const plants = data.map((item) => {
      const plant = new Plant();
      return plant.fromPlain(item);
    });
    const plantsSuccess = true;
    this.setState({ plants, plantsSuccess });
    resolve();
  }

  fetchPlantsError (error, reject) {
    this.setState({ plantsSuccess: false });
    reject();
  }

  clonePlants = () => this.state.plants.map(plant => plant);

  comparator = (extractor) => {
    return (firstValue, secondValue) => {
      const [a, b] = [extractor(firstValue), extractor(secondValue)];
      if (a > b) { return 1; }
      if (a < b) { return -1; }
      return 0;
    };
  };

  fieldExtractor = (key) => (plant) => plant[key];

  mappedFieldExtractor = (plantKey, source, sourceKey, mappedKey) => (plant) => {
    const value = plant[plantKey];
    const foundSourceItem = source.find(sourceItem => sourceItem[sourceKey] === value);
    return foundSourceItem[mappedKey];
  };

  getSortComparator = (sortKey) => {
    const lexicalFieldComparator = this.comparator(this.fieldExtractor(sortKey));
    const categoryComparator = this.comparator(this.mappedFieldExtractor(sortKey, this.state.categories, 'id', 'name'));
    const roomComparator = this.comparator(this.mappedFieldExtractor(sortKey, this.state.rooms, 'id', 'name'));
    const comparators = {
      [PLANT_SORT_KEY_ID]: lexicalFieldComparator,
      [PLANT_SORT_KEY_NAME]: lexicalFieldComparator,
      [PLANT_SORT_KEY_BLOOMING]: lexicalFieldComparator,
      [PLANT_SORT_KEY_WATERING_INTERVAL]: lexicalFieldComparator,
      [PLANT_SORT_KEY_FERTILIZING_INTERVAL]: lexicalFieldComparator,
      [PLANT_SORT_KEY_DIFFICULTY]: lexicalFieldComparator,
      [PLANT_SORT_KEY_CATEGORY_ID]: categoryComparator,
      [PLANT_SORT_KEY_ROOM_ID]: roomComparator,
    };

    return comparators[sortKey];
  };

  sort = (sortKey) => {
    const plants = this.clonePlants();

    if (sortKey && this.state.sortKey === sortKey) {
      plants.reverse();
      this.setState({ plants });
      return;
    }

    const comparator = this.getSortComparator(sortKey);

    if (typeof comparator === 'function') {
      plants.sort(comparator);
      this.setState({ plants, sortKey });
    }
  };

  render () {
    const {
      rooms,
      roomsInProgress,
      roomsSuccess,
      categories,
      categoriesInProgress,
      categoriesSuccess,
      plants,
      plantsSuccess,
      plantsInProgress,
      sortKey
    } = this.state;

    const sort = this.sort;

    return (
      <Card className="mb-4">
        <CardBody>
          <InProgress inProgress={plantsInProgress || categoriesInProgress || roomsInProgress}/>
          {
            plantsSuccess === false &&
            <p>Unable to fetch plants.</p>
          }
          {
            plantsSuccess && categoriesSuccess && roomsSuccess && (
              <div className="plants-container">
                <Table>
                  <thead className="plants-container-header">
                  <tr>
                    <PlantsTableHeaderCell>No.</PlantsTableHeaderCell>
                    <PlantsTableHeaderCell onSort={sort} sortKey={sortKey} sortBy={PLANT_SORT_KEY_ID}>Id</PlantsTableHeaderCell>
                    <PlantsTableHeaderCell onSort={sort} sortKey={sortKey} sortBy={PLANT_SORT_KEY_NAME}>Name</PlantsTableHeaderCell>
                    <PlantsTableHeaderCell onSort={sort} sortKey={sortKey} sortBy={PLANT_SORT_KEY_CATEGORY_ID}>Category</PlantsTableHeaderCell>
                    <PlantsTableHeaderCell onSort={sort} sortKey={sortKey} sortBy={PLANT_SORT_KEY_WATERING_INTERVAL}>Watering Interval</PlantsTableHeaderCell>
                    <PlantsTableHeaderCell onSort={sort} sortKey={sortKey} sortBy={PLANT_SORT_KEY_FERTILIZING_INTERVAL}>Fertilizing Interval</PlantsTableHeaderCell>
                    <PlantsTableHeaderCell onSort={sort} sortKey={sortKey} sortBy={PLANT_SORT_KEY_REQUIRED_EXPOSURE}>Required Exposure</PlantsTableHeaderCell>
                    <PlantsTableHeaderCell onSort={sort} sortKey={sortKey} sortBy={PLANT_SORT_KEY_REQUIRED_HUMIDITY}>Required Humidity</PlantsTableHeaderCell>
                    <PlantsTableHeaderCell onSort={sort} sortKey={sortKey} sortBy={PLANT_SORT_KEY_REQUIRED_TEMPERATURE}>Required Temperature</PlantsTableHeaderCell>
                    <PlantsTableHeaderCell onSort={sort} sortKey={sortKey} sortBy={PLANT_SORT_KEY_BLOOMING}>Blooming</PlantsTableHeaderCell>
                    <PlantsTableHeaderCell onSort={sort} sortKey={sortKey} sortBy={PLANT_SORT_KEY_DIFFICULTY}>Difficulty</PlantsTableHeaderCell>
                    <PlantsTableHeaderCell onSort={sort} sortKey={sortKey} sortBy={PLANT_SORT_KEY_ROOM_ID}>Room</PlantsTableHeaderCell>
                    <PlantsTableHeaderCell>Last Watered</PlantsTableHeaderCell>
                    <PlantsTableHeaderCell>Last Fertilized</PlantsTableHeaderCell>
                  </tr>
                  </thead>
                  <tbody>
                  {
                    plants.map((plant, index, arr) => (
                      <PlantRow
                        categories={categories}
                        rooms={rooms}
                        plant={plant}
                        key={plant.id}
                        index={index + 1}
                      />
                    ))
                  }
                  </tbody>
                </Table>
              </div>
            )}
        </CardBody>
      </Card>
    );
  }
}

Plants.propTypes = {
  delayFetch: PropTypes.func.isRequired,
};

export default Plants;
