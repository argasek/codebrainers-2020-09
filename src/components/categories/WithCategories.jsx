import React from "react";
import axios from "axios";

const CATEGORIES_FETCH_DELAY = 500;

const withCategories = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        categoriesInProgress: false,
        categoriesSuccess: undefined,
        categories: [],
      }
    }

    fetchCategories() {

      const requestUrl = 'http://gentle-tor-07382.herokuapp.com/categories/';
      this.setState({inProgress: true});
      return this.props.delayFetch(CATEGORIES_FETCH_DELAY, (resolve, reject) => {
        axios.get(requestUrl)
          .then((response) => {
            const data = response.data;
            const categories = data.map((item) => ({name: item.name, id: item.id}));
            const successCategories = true;
            this.setState({categories, successCategories});
            resolve();
          })
          .catch((error) => {
            this.setState({successCategories: false});
            reject();
          })
          .finally(() => {
            // console.log('Resolved');
          });
      });
    }

  }
}