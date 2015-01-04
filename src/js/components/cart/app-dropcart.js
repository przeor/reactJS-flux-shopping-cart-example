/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../../actions/app-actions.js');
var DropCart =
  React.createClass({
    handleClick:function(){
      console.log("kamil");
      AppActions.dropCart();
    },
    render:function(){
      return <button onClick={this.handleClick}>Drop Cart</button>
    }
  });
module.exports = DropCart;