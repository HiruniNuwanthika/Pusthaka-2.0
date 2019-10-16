import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import './index.css';
// //  import { Route, , BrowserRouter as Router, Switch } from 'react-router-dom'
// import App from '../App';
import Home from './home';
import Member from './member';
import Book from './book';
import BookRepo from './bookRepo';
 import NotFound from './notfound';
//import * as serviceWorker from './serviceWorker';
import { NavItem, Navbar, Nav, NavbarBrand, Collapse} from 'reactstrap';
import NavbarToggler from 'reactstrap/lib/NavbarToggler';


class PageRouter extends React.Component{

  state = {
    isOpen: false
  };

  toggler =() =>{
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render(){
    return ( 
    // <h1>wqdq</h1>
    <Router>
      <div>
        <Navbar color="dark"  className="navbar-dark navbar-expand-sm">
          <NavbarBrand href="/">Pusthaka 2.0</NavbarBrand>
            <NavbarToggler onClick={this.toggler}/>
              <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <Nav className="nav-bar ml-auto" navbar>
                  <NavItem style={{marginRight:"20px"}} active>
                    <NavLink to="/">Home</NavLink>
                  </NavItem>
                  <NavItem style={{marginRight:"20px",}}>
                    <NavLink to="/member">Member</NavLink>
                  </NavItem>  
                  <NavItem style={{marginRight:"20px"}}>
                    <NavLink to="/book">Book</NavLink>
                  </NavItem>
                  <NavItem style={{marginRight:"20px"}}>
                    <NavLink to="/bookRepo">Book Repo</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
        </Navbar>  
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/member" component={Member} />
          <Route path="/book" component={Book} />
          <Route path="/bookRepo" component={BookRepo} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
    )
  }
}
    
export default PageRouter;
