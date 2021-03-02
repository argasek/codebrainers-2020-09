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
import AuthenticatedNavbarItem from "components/navbar/AuthenticatedNavbarItem";
import Routes from "constants/Routes";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import navbarItems from 'components/navbar/constants/NavbarItems';
import PropTypes from 'prop-types';
import { NavLink as RouterNavLink } from 'react-router-dom';

class AuthenticatedNavbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    const isOpen = !this.state.isOpen;
    this.setState({ isOpen });
  };

  render() {
    const { isOpen } = this.state;
    const { onLogout } = this.props;
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href={ Routes.ROOT }>Plantastic</NavbarBrand>
        <NavbarToggler onClick={ this.toggle } />
        <Collapse isOpen={ isOpen } navbar>
          <Nav className="mr-auto" navbar>
            {
              navbarItems.map((navbarItem) =>
                <AuthenticatedNavbarItem
                  exact={ navbarItem.exact }
                  icon={ navbarItem.icon }
                  key={ navbarItem.path }
                  name={ navbarItem.name }
                  path={ navbarItem.path }
                />
              )
            }
          </Nav>
          <Nav navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <FontAwesomeIcon icon={ faCog } />
                { ' ' }
                Account
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <RouterNavLink to={ Routes.ACCOUNT }>
                    Preferences…
                  </RouterNavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={ onLogout }>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default AuthenticatedNavbar;

AuthenticatedNavbar.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

