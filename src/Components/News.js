import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "9/11 defendant unfit to stand trial, US judge rules",
      description: "A military judge accepts Ramzi bin al-Shibh is too psychologically damaged to defend himself.",
      url: "http://www.bbc.co.uk/news/world-us-canada-66886923",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/729E/production/_131224392_a4404ed4ddc9894ad447fa647fc5186ae8f073b2-1.jpg",
      publishedAt: "2023-09-22T14:22:23.3224483Z",
      content: "A military judge at Guantanamo Bay has ruled one of the five defendants charged over the 9/11 attacks is not fit to stand trial in a death-penalty case.\r\nThe defendant Ramzi bin al-Shibh has been dia… [+2476 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "New York school bus crash: 'Faulty tyre' leaves two dead and five critically injured",
      description: "The bus was taking a marching band to camp when it rolled off the road, killing two adults.",
      url: "http://www.bbc.co.uk/news/world-us-canada-66885033",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/0408/production/_131223010_capt23432ure.jpg",
      publishedAt: "2023-09-22T14:07:28.5729962Z",
      content: "Media caption, Aerials show mass casualty crash of bus carrying students\r\nTwo people have died and five others have been critically injured in a school bus crash in New York. \r\nIt appears to have bee… [+2632 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "US Senator Bob Menendez charged in bribery investigation",
      description: "The Democratic senator and his wife allegedly accepted gold bars, cash and a luxury car.",
      url: "http://www.bbc.co.uk/news/world-us-canada-66893936",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breaking-large-promo-nc.png",
      publishedAt: "2023-09-22T14:07:25.509337Z",
      content: "New Jersey Democratic Senator Robert Menendez has been indicted for allegedly accepting hundreds of thousands of dollars in bribes, according to the Justice Department. \r\nProsecutors say Mr Menendez … [+1294 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Watch: Smoke rises from Russia's Black Sea navy HQ",
      description: "Videos circulating on social media show plumes of smoke billowing out of the building in Sevastopol, Crimea.",
      url: "http://www.bbc.co.uk/news/world-europe-66887318",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/AE62/production/_131224644_p0gg4cmq.jpg",
      publishedAt: "2023-09-22T14:07:22.9787158Z",
      content: "A missile has hit the headquarters of Russia's Black Sea navy in Crimea, a local Moscow-appointed official has said.\r\nVideos circulating on social media show plumes of smoke billowing out of the buil… [+80 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Two bodies found in Rio Grande as migrant crossings rise",
      description: "Migrant apprehensions at the US-Mexico border have risen to near-record levels in September.",
      url: "http://www.bbc.co.uk/news/world-us-canada-66890942",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/B52E/production/_131228364_599f9fb1d642c1750be00d1a88ac009f389d31f5.jpg",
      publishedAt: "2023-09-22T12:22:20.4472611Z",
      content: "The bodies of two migrants were recovered from the Rio Grande separating the US and Mexico this week, including a three-year-old child.\r\nMigrant arrivals at the US southern border have spiked to near… [+2627 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Ukraine gets more US aid as Zelensky urges allies to keep up support",
      description: "A larger $26bn package the White House wants to send is being held up as US politicians argue over funds for Ukraine.",
      url: "http://www.bbc.co.uk/news/live/world-66888101",
      urlToImage: "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
      publishedAt: "2023-09-22T10:37:20.5099534Z",
      content: "We resume our coverage of Ukraine-related events as President Volodymyr Zelensky is in Canada on an unannounced visit to rally support for his country.\r\nOn Thursday, he was in the US where President … [+510 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Do China's recent military purges spell trouble for Xi Jinping?",
      description: "Military officials are disappearing - is this a sign of instability or Xi Jinping's strength?",
      url: "http://www.bbc.co.uk/news/world-asia-china-66875526",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/13492/production/_131149987_gettyimages-1248971355.jpg",
      publishedAt: "2023-09-22T06:37:18.0250062Z",
      content: "They were trusted and favoured by Xi Jinping. Now, they seem to be vanishing. \r\nIn recent months, the disappearances of several high-ranking Chinese officials have sparked intense speculation over wh… [+7376 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Ukraine's Volodymyr Zelensky makes unannounced visit to Canada",
      description: "The Ukrainian president has landed in Canada for the first time since Russia's invasion in February 2022.",
      url: "http://www.bbc.co.uk/news/world-us-canada-66885865",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/008E/production/_131224100_gettyimages-1680798739.jpg",
      publishedAt: "2023-09-22T06:22:22.0723363Z",
      content: "Ukrainian president Volodymyr Zelensky has arrived in Canada on an unannounced visit to rally support for his country.\r\nCanadian TV showed Prime Minister Justin Trudeau meeting Mr Zelensky on the run… [+1659 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Osiris-Rex: Asteroid Bennu 'is a journey back to our origins'",
      description: "A handful of dust from an asteroid streaming through space could tell Nasa how life on Earth began.",
      url: "http://www.bbc.co.uk/news/science-environment-66844738",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/3420/production/_131144331_re-entry.png",
      publishedAt: "2023-09-22T06:22:21.2756599Z",
      content: "Nasa's Osiris-Rex capsule will come screaming into Earth's atmosphere on Sunday at more than 15 times the speed of a rifle bullet.\r\nIt will make a fireball in the sky as it does so, but a heat shield… [+6291 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e56c12946e1548deb202af0f4f2b4e38&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    console.log(this.props.pageSize)
  }

  btnPrevPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e56c12946e1548deb202af0f4f2b4e38&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
    });
  };
  btnNextPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e56c12946e1548deb202af0f4f2b4e38&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="display-6 fs-2">NewsBubble - Top Headlines</h1>
        <div className="row my-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
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
