import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown
} from "reactstrap";
import PlantasticNavItem from "components/nav/nav-item/PlantasticNavItem";
import {
  ROUTE_CATEGORIES,
  ROUTE_PLANTS,
  ROUTE_ROOMS,
  ROUTE_PREFERENCES,
  ROUTE_EXERCISE,
  ROUTE_CALCULATOR,
  ROUTE_ITEM2,
  ROUTE_ITEM1,
} from "constants/Routes";
import {faCog, faCogs, faHome, faLeaf, faSeedling, faCodeBranch, faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Link} from 'react-router-dom'

class PlantasticNavbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    const isOpen = !this.state.isOpen;
    this.setState({isOpen});
  };

  render() {
    const {isOpen} = this.state;
    const userFullName = this.props.userFullName;
    return (
            <React.Fragment>
              <Navbar color="dark" dark expand="md" className="mb-4">
                <NavbarBrand href="/">Plantastic</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="mr-auto" navbar>
                    <PlantasticNavItem path={ROUTE_PLANTS} icon={faSeedling} name='Plants'/>
                    <PlantasticNavItem path={ROUTE_CATEGORIES} icon={faLeaf} name='Categories'/>
                    <PlantasticNavItem path={ROUTE_ROOMS} icon={faHome} name='Rooms'/>
                    <PlantasticNavItem path={ROUTE_PREFERENCES} icon={faCogs} name='Preferences'/>
                    <PlantasticNavItem path={ROUTE_EXERCISE} icon={faCodeBranch} name='Exercise'/>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        <FontAwesomeIcon icon={faBars}/>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem tag={Link} to={ROUTE_ITEM1}>
                          item 1
                        </DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem  tag={Link} to={ROUTE_ITEM2}>
                          item2
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>


                  </Nav>
                  <Nav navbar>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        <FontAwesomeIcon icon={faCog}/>
                        {' '}
                        {userFullName}
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem tag={Link} to={ROUTE_PREFERENCES}>
                          Preferences…
                        </DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem>
                          Logout
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Navbar>
            </React.Fragment>

    )
  }
}

export default PlantasticNavbar;
