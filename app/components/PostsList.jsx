var React = require('react');
var {Link} = require('react-router');

var PostsList = React.createClass({
  componentWillMount: function () {
    this.props.fetchPosts;
  },
  renderPosts: function (posts) {
    return posts.map((post) => {
      return (
        <li key={post.id}>
          {post.title}
        </li>
      )
    });
  },
  render: function () {
    return (
      <div>
        hey
      </div>
    )
  }
});

module.exports = PostsList;
