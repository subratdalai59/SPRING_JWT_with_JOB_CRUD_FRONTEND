import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import images from './components/img/cutm.png';
import About from './components/About';
import Contact from './components/Contact';



// import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import ListJobComponent from './components/ListJobComponent';

import CreateJobComponent from './components/CreateJobComponent';
import SeeJobComponent from './components/SeeJobComponent';
import ViewJobComponent from './components/ViewJobComponent';
import AdmJobComponent from './components/AdmJobComponent';





class App extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }
  logOut() {
    AuthService.logout();
  }
  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
    return (
      










      
      
      <div id="navcom">
        
        <div className="container-fluid nav_bg">
        
            <div className="col-12 mx-auto">
        <nav className="navbar navbar-expand ">
          

          
        <NavLink to="/"><img src={images} width="40" alt="" class="d-Inline-block align-middle mr-2"/></NavLink>
          <NavLink to={"/"} className="navbar-brand">
            CUTM HRMS
          </NavLink>

          <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
        
          
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={"/home"} className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={"/about"} className="nav-link">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={"/contactus"} className="nav-link">
                Contact
              </NavLink>
            </li>


            {showModeratorBoard && (
              <li className="nav-item">
                <NavLink to={"/mod"} className="nav-link">
                  Moderator Board
                </NavLink>
              </li>
            )}
            {showAdminBoard && (
              <li className="nav-item">
                <NavLink to={"/admin"} className="nav-link">
                  Admin Board
                </NavLink>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <NavLink to={"/user"} className="nav-link">
                  User
                </NavLink>
              </li>
            )}
          
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to={"/profile"} className="nav-link">
                  {currentUser.username}
                </NavLink>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to={"/login"} className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/register"} className="nav-link">
                  Sign Up
                </NavLink>
              </li>
            </div>
          )}
          </ul>
          
          
          
         </div>
        </nav>
        
        </div>
       
        </div>
        













{/* <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-12 mx-auto">
              <nav className="navbar navbar-expand-lg navbar-light n">
                <div className="container-fluid">
                <Link to="/"><img src={images} width="70" alt="" class="d-Inline-block align-middle mr-2"/></Link>


                <Link className="navbar-brand" to="/">
                  CENTURION HRMS
                </Link>

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">



                      <li className="nav-item">
                        <Link
                          activeClassName="menu_active" exact
                          className="nav-link active"
                          aria-current="page"
                          to="/home">
                          Home
                        </Link>
                      </li>


                      {showModeratorBoard && (
                      <li className="nav-item">
                        <Link activeClassName="menu_active" exact className="nav-link" to="/mod">
                          Moderator Board
                        </Link>
                      </li>
                      )}


                      {showAdminBoard && (
                      <li className="nav-item">
                        <Link activeClassName="menu_active" exact className="nav-link" to="/admin">
                          Admin Board
                        </Link>
                      </li>
                      )}

                      {currentUser && (
                      <li className="nav-item">
                        <Link activeClassName="menu_active" exact className="nav-link" to="/user">
                          User
                        </Link>
                      </li>
                      )}
                      </ul>
                      </div>
                      <ul>
                      {currentUser ? (
                      <div className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link activeClassName="menu_active" exact className="nav-link" to="/profile">
                        {currentUser.username}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link activeClassName="menu_active" exact className="nav-link" to="/login" onClick={this.logOut}>
                        Logout
                        </Link>
                      </li>
                      </div>
                      ):(
                        <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link activeClassName="menu_active" exact className="nav-link" to="/login">
                          Login
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link activeClassName="menu_active" exact className="nav-link" to="/register" >
                          Signup
                          </Link>
                        </li>
                        </div>

                      )}



                    </ul>
                  </div>
              </nav>
            </div>
          </div>
        </div> */}
        
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/about" component={About}/>
            <Route path="/contactus" component={Contact}/>
            <Route path="/seejob" exact component={SeeJobComponent}/>
            <Route path="/admjob" exact component={AdmJobComponent}/>
            <Route path="/jobs" component={ListJobComponent}/>
            <Route path="/add-job/:id" component={CreateJobComponent}/>
            <Route path="/view-job/:id" component={ViewJobComponent}/>
              {/* <Route path="/update-syllabus/:id" component={UpdateSyllabusComponent}></Route>    */}
          </Switch>
        </div>
      
    );
  }
}
export default App;