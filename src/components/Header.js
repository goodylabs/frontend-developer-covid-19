import React, { Component } from "react";
import { withRouter,Link } from "react-router-dom";
import styles from "./Header.module.css";;

class Header extends Component {
  constructor() {
    super();
    this.isRoot = false;
    this.lastIsRoot = false;
  }

  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
            <Link className={styles.LogoContainer} to={"/"}>
              {this.props.location.pathname !== "/" ? (
                <span className={`material-icons ${styles.LogoContainer_icon}`}>arrow_back_ios</span>
              ) : (
                ""
              )}
                <span className={styles.LogoContainer_logo}>CovidStats</span>
              </Link>
            </div>
            
          </div>
        </div>
      </header>
    );
  }
}


export default withRouter(Header);
