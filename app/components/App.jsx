var React = require('react');

var Header = require('Header');

var App = (props) => {
  return(
    <div>
      <Header/> 
      <p>App.jsx Rendered</p>
      {props.children}
      </div>
    );
};

module.exports = App;
