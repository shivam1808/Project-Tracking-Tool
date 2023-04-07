import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Landing extends Component {
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-2 text-center">
                <img src={process.env.PUBLIC_URL+"icon.svg"} style={{height:100, width:100}} />
              </div>
              <div className="col-md-10">
                <h1 className="display-3 mb-4" style={{fontWeight: 'bold'}}>
                  Project Tracking Tool
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p className="lead">
                  Add and Manage all your <b>Project(s)</b>
                </p>
                <p className="lead">
                <b>Project tracker</b> is a tool that measures project performance, helping you keep your project's scope, budget, and schedule in check.
                </p>
                <hr />
                <Link className="btn btn-lg btn-primary mr-2" to="/register">
                  Sign Up
                </Link>
                <Link className="btn btn-lg btn-secondary mr-2" to="/login">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  security: state.security
});

export default connect(mapStateToProps)(Landing);
