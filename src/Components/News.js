import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import LoadingSpinner from "./LoadingSpinner";

export class News extends Component {
  articles = [
    {
      source: {
        id: "",
        name: "",
      },
      author: "",
      title: "",
      description: "",
      url: "",
      urlToImage: "",
      publishedAt: "",
      content: "",
    },
  ];

  static defaultProps = {
    category: "sports",
    pageSize: 6,
    countryCode: "in",
    newsApi: "e56c12946e1548deb202af0f4f2b4e38",
  };

  static propTypes = {
    category: PropTypes.string,
    pageSize: PropTypes.number,
    countryCode: PropTypes.string,
    newsApi: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async UpdateNews() {}

  componentDidMount = async () => {
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.countryCode}&apiKey=${this.props.newsApi}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  btnPrevPage = async () => {
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.countryCode}&apiKey=${this.props.newsApi}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      page: this.state.page - 1,
    });
  };

  btnNextPage = async () => {
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.countryCode}&apiKey=${this.props.newsApi}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      page: this.state.page + 1,
    });
  };

  render() {
    return (
      <div className="container">
        {/* adding paragraph for showing page number of newspaper */}
        <p className="d-flex justify-content-end my-3 text-secondary"> Page : {this.state.page}</p>
        {/* Heading */}
        <h1 className="display-6 fs-2 text-center my-4">
          {this.props.AppName} - Top Headlines [ {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1).toLowerCase()} ]
        </h1>
        {/* LoadingSpinner */}
        {this.state.loading && <LoadingSpinner />}
        <div className="row my-3">
          {/* News Data */}
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} className="btn btn-sm btn-dark" onClick={this.btnPrevPage}>
            &larr; Previous
          </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize) ? true : false} className="btn btn-sm btn-dark nextBtn" onClick={this.btnNextPage}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
