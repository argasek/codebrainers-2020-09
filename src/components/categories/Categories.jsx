import {Card, CardBody, ListGroup, Table} from "reactstrap";
import React from "react";
import CategoryItem from "components/categories/CategoryItem";
import InProgress from "components/shared/InProgress";
import axios from 'axios';

const CATEGORIES_FETCH_DELAY = 500;

class Categories extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      inProgress: false,
      successCategories: undefined,
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories()
            .finally(() => {
              this.setState({inProgress: false});
            })
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
                console.log('Resolved');
              });
    });
  }

  render() {
    const {
      inProgress,
      successCategories,
      categories,
    } = this.state;


    return (
            <Card>
              <CardBody>
                <div className="app-container">
                  <InProgress inProgress={inProgress}/>
                  {
                    successCategories === false &&
                    <p>Nie udało się pobrać Kategorii</p>
                  }
                  {
                    successCategories &&
                    <Table bordered>
                      <thead>
                      <tr>
                        <th className="taking-care-records"  colSpan={"100%"}> Plant's Categories</th>
                      </tr>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Name with Id</th>
                      </tr>
                      </thead>
                      <tbody>
                      {
                        categories.map((item, index, arr) =>
                                  <CategoryItem
                                          category={item}
                                          label='category'
                                          key={index}
                                          isLastItem={arr.length - 1 === index}
                                          index={index}
                                  />
                          )

                      }
                      </tbody>


                    </Table>
                  }
                </div>
              </CardBody>
            </Card>
    )
  }
}


export default Categories;