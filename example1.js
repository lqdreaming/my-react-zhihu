var React = require('react');

var NewsItemComponent = React.createClass({
  render: function() {
    return (


      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
      </div>


    );
  }
});

var NewsListComponent = React.createClass({
  getInitialState: function() {
    return {newsList: []}
  },

  componentDidMount: function() {
    document.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount: function() {
    document.removeEventListener('scroll', this.handleScroll);
  },

  addNews: function(news) {
    this.setState({newsList: this.state.newsList.concat(news)});
  },

  handleScroll: function() {
    if (isBottom) {
      ajax.request('api').then(this.addNews);
    }
  },

  render: function() {
    var newsList = this.state.newsList.map(function(news) {
      return <NewsItemComponent news={news} key={news.id} />;
    });

    return (
      <div>
        {newsList}
      </div>
    );
  }
});