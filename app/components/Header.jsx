var React = require('react');
var {Link} = require('react-router');

var Header = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <div>
            <Link to="/">Tranpolin</Link>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Header;
