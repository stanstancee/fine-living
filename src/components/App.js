import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveProductsAsync } from '../actions/products'
//import Footer from './footer'
import DashBoard from './DashBoard'
import Cart from './Cart'
import ProductDetails from './ProductDetails'
import { Route, Switch } from 'react-router-dom'





class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    const url = ["https://fakestoreapi.com/products", "https://fakestoreapi.com/products/categories",]
    dispatch(receiveProductsAsync(url[0], url[1]))

  }
  render() {
    return (
      <div  >
        <Switch>
          <Route exact path="/">
            <DashBoard />
          </Route>
          <Route path="/products">
            <ProductDetails />
          </Route>
        </Switch>

        <Cart />



      </div>
    );
  }
}

export default connect()(App);
