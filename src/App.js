import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="">
          <Navbar />
          <Routes>
            <Route path="/business" element={<News key='business' newsApi="e56c12946e1548deb202af0f4f2b4e38" pageSize={6}  category="business" countryCode="in" />}></Route> 
            <Route path="/entertainment" element={<News key='entertainment' newsApi="e56c12946e1548deb202af0f4f2b4e38" pageSize={6}  category="entertainment" countryCode="in" />}></Route>
            <Route path="/general" element={<News key='general' newsApi="e56c12946e1548deb202af0f4f2b4e38" pageSize={6}  category="general" countryCode="in" />}></Route>
            <Route path="/health" element={<News key='health' newsApi="e56c12946e1548deb202af0f4f2b4e38" pageSize={6}  category="health" countryCode="in" />}></Route>
            <Route path="/science" element={<News key='science' newsApi="e56c12946e1548deb202af0f4f2b4e38" pageSize={6}  category="science" countryCode="in" />}></Route>
            <Route path="/" element={<News newsApi="e56c12946e1548deb202af0f4f2b4e38" pageSize={6}  category="sports" countryCode="in" />}></Route>
            <Route path="/technology" element={<News key='technology' newsApi="e56c12946e1548deb202af0f4f2b4e38" pageSize={6}  category="technology" countryCode="in" />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
