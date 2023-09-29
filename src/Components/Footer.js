import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer className="text-gray-600 bg-white body-font dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row "></div>
        <div className="p-3 mx-2">
          <span className="text-dark center-of-line display-6 fs-5 fw-medium">{this.props.AppName}</span>
          <span className="display-6 center-of-line fs-1 fw-light"> | </span>
          <a className="text-secondary center-of-line text-decoration-none" href="/">
            Copyright © 2023 {this.props.AppName}.com
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
