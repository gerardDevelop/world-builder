import React, { Component } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';



export default class Navigation extends Component {

  /*
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetch-data' component={FetchData} />
    <Route path='/custom-route' component={CustomRoute} />  
  */

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render () {
    
    //const crossHairCursor = 'url(assets/crosshair1.cur), auto';

    /*const toReturn = (<div className="App" style={{ cursor: 'url(assets/crosshair1.cur), auto' }} >
      </div>);*/

    const toReturn = (<div>

      

      <Navbar color="light" light expand="md">
          <NavbarBrand href="/">World Builder</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  File
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    New
                  </DropdownItem>
                  <DropdownItem>
                    Save
                  </DropdownItem>
                  <DropdownItem>
                    Open
                  </DropdownItem>
                  <DropdownItem>
                  	Close
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  	Preferences
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  View
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    Show palette
                  </DropdownItem>
                  <DropdownItem>
                    Show brush
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>


              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Manage
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    NPC manager
                  </DropdownItem>
                  <DropdownItem>
                    Waypoint manager
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>


            </Nav>
          </Collapse>
        </Navbar>




    </div>);  
    
    return toReturn;
    
  }
}
