import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let { title, description,imageUrl,newsUrl} = this.props;  //destructuring concept of javascript
    return (
          <div className="card my-2">
            <img src={imageUrl!==null?imageUrl:"https://ichef.bbci.co.uk/news/1024/branded_news/3420/production/_131144331_re-entry.png"} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
                Read More
              </a>
            </div>
          </div>
          
    );
  }
}

export default NewsItem;
