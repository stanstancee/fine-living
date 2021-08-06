import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveProductsAsync } from '../actions/products'
import Footer from './Footer'
import DashBoard from './DashBoard'
// import Category from './Category'
import ProductDetails from './ProductDetails'
import { Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'
import Cart from './Cart'





class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    const url = ["https://fakestoreapi.com/products", "https://fakestoreapi.com/products/categories",]
    dispatch(receiveProductsAsync(url[0], url[1]))

  }
  render() {
    return (
      <div  >
        <Navigation />
        <Switch>
          <Route exact path="/">
            <DashBoard />
          </Route>
          <Route path="/products">
            <ProductDetails />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default connect()(App);
