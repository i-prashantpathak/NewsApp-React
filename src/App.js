import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";

export default class App extends Component {
  render() {
    let pageSize = 6;
    return (
      <BrowserRouter>
        <div className="">
          <Navbar AppName={"NewsBubble"} />
          <Routes>
            <Route  path="/business" element={<News AppName={"NewsBubble"} key="business" newsApi="e56c12946e1548deb202af0f4f2b4e38" pageSize={pageSize} category="business" countryCode="in" />}></Route>
            <Route  path="/entertainment" element={<News AppName={"NewsBubble"} key="entertainment" newsApi="e56c12946e1548deb202af0f4f2b4e38" pageSize={pageSize} category="entertainment" countryCode="in" />}></Route>
            <Route  path="/" element={<News AppName={"NewsBubble"} key="general" newsApi="e56c12946e1548deb202af0f4f2b4e38" pageSize={pageSize} category="general" countryCode="in" />}></Route>
            <Route  path="/health" element={<News AppName={"NewsBubble"} key="health" newsApi="e56c12946e1548deb202af0f4f2b4e38" pageSize={pageSize} category="health" countryCode="in" />}></Route>
            <Route  path="/science" element={<News AppName={"NewsBubble"} key="science" newsApi="e56c12946e1548deb202af0f4f2b4e38" pageSize={pageSize} category="science" countryCode="in" />}></Route>
            <Route  path="/sports" element={<News AppName={"NewsBubble"} newsApi="e56c12946e1548deb202af0f4f2b4e38" pageSize={pageSize} category="sports" countryCode="in" />}></Route>
            <Route  path="/technology" element={<News AppName={"NewsBubble"} key="technology" newsApi="e56c12946e1548deb202af0f4f2b4e38" pageSize={pageSize} category="technology" countryCode="in" />}></Route>
          </Routes>
          <Footer AppName={"NewsBubble"} />
        </div>
      </BrowserRouter>
    );
  }
}
