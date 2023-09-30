import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import LoadingSpinner from "./LoadingSpinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  capitalizeFirstLettre = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  static defaultProps = {
    category: "general",
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

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = this.capitalizeFirstLettre(`${this.props.category} - ${this.props.AppName}`);
  }

  componentDidMount = async () => {
    this.setState({ page: this.state.page + 1 });
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

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.countryCode}&apiKey=${this.props.newsApi}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
        {/* Heading */}
        <h1 className="display-6 fs-2 text-center my-4">
          {this.props.AppName} - Top {this.capitalizeFirstLettre(this.props.category)} Headlines
        </h1>
        {/* LoadingSpinner */}
        {this.state.loading && <LoadingSpinner />}

        {/* News Data */}
        <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length !== this.state.totalResults} loader={<LoadingSpinner />}>
          <div className="container">
            <div className="row my-3">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
