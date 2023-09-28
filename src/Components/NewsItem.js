import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date ,source} = this.props; //destructuring concept of javascript
    return (
      <div className="card my-2">
        <img src={imageUrl !== null ? imageUrl : "https://ichef.bbci.co.uk/news/1024/branded_news/3420/production/_131144331_re-entry.png"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {title}
            <span class="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left:'80%',zIndex:1}}>5
          {source}
              <span class="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author === null ? "Unknown" : author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
