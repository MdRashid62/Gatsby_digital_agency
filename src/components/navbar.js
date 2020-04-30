import React, { Component } from "react";
import {
  MDBContainer, MDBNavbar,  MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { Link } from 'gatsby';
import CustomNavLink from './customLink';
import { ReactComponent as Logo } from "../images/light-bulb.svg";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <MDBNavbar color="indigo" dark expand="md">
        <MDBContainer>
          <Logo  />
          <Link to="/" className="navbar-brand">
            <strong className="ml-3 white-text">Creative Agency</strong></Link>
          <MDBNavbarToggler name="navbar-toggler" onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
                <CustomNavLink to="#!">Home</CustomNavLink>
                <CustomNavLink to="#!">About</CustomNavLink>
                <CustomNavLink to="#!">Projects</CustomNavLink>
                <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">About</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu right>
                    <MDBDropdownItem href="#!">Contact</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Articles</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Testimonials</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <div className="d-flex align-items-center">
                <CustomNavLink to="#!">
                 <a href = "https://facebook.com/Rashy.mr62"> <MDBIcon fab icon="facebook" className="ml-1" /></a>
                </CustomNavLink>
                <CustomNavLink to="#!">
                <a href = "https://github.com/MdRashid62/"> <MDBIcon fab icon="github" className="ml-1" /></a>
                </CustomNavLink>
                <CustomNavLink to="#!">
                 <a href = "https://www.linkedin.com/in/rashid-muhammad-b36909153/"> <MDBIcon fab icon="linkedin" className="ml-1" /></a>
                </CustomNavLink>
              </div>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
