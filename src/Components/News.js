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

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.countryCode}&apiKey=${this.props.newsApi}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
  }

  btnPrevPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.countryCode}&apiKey=${this.props.newsApi}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };
  btnNextPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.countryCode}&apiKey=${this.props.newsApi}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="display-6 fs-2 text-center my-4">NewsBubble - Top Headlines</h1>
        {this.state.loading && <LoadingSpinner />}
        <div className="row my-3">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} className="btn btn-sm btn-dark" onClick={this.btnPrevPage}>
            {" "}
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
