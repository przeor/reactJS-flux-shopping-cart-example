/** @jsx React.DOM */
var React = require('react');
var Catalog = require('./catalog/app-catalog.js');
var Cart = require('./cart/app-cart.js');
var AppActions = require('../actions/app-actions.js');
var CatalogDetail = require('./product/app-catalogdetail.js');
var Template = require('./app-template.js');
var Router = require('react-router-component');


var Locations = React.createFactory(Router.Locations);
var Location = React.createFactory(Router.Location);

var MainPage = React.createClass({
    render: function() {
        return (
            <div>View</div>
        )
    }
})


var APP =
  React.createClass({
    handleClick:function(){
      AppActions.dropCart();
    },
    render:function(){
      return (
      <Template>  
        <Locations>
          <Location path="/" handler={Catalog} />
          <Location path="/cart" handler={Cart} />
          <Location path="/item/:item" handler={CatalogDetail} />
        </Locations>
      </Template>
      	) 
    }
  });
module.exports = APP;