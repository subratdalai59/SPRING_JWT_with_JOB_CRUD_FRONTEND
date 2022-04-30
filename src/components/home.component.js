import React, { Component } from "react";
import UserService from "../services/user.service";
import { NavLink } from 'react-router-dom';
import log from './img/cutm.png'
import './home.css'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }
  render() {
    return (
      // <div className="container ">
     
      
    
        <header className="jumbotron">
          {/* <h3>{this.state.content} */}
          <div>
        <section id="header" className="d-flex align-items-center ">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-10 mx-auto">
              <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                      <h1> HR-Management-System <strong className="brand-name"><br/>Centurion University</strong></h1>
                      <h2 className="my-3">Shaping Lives ,Empowering Communities.......</h2>
                      <div className="mt-3">
                          <NavLink to="/login" className="btn-get-started"> Sign In </NavLink>
                          <NavLink to="/seejob" className="btn-get-started"> Vaccencies </NavLink>
                          
                      </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                      <img src={log} className="img-fluid animated" alt="home img"></img>

                  </div>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* </h3> */}
        </header>
        
      // </div>
    );
  }
}