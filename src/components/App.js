import PropTypes from "prop-types";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveProductsAsync } from '../actions/products'
import Footer from './Footer'
import DashBoard from './DashBoard'
import Category from './Category'
import ProductDetails from './ProductDetails'
import { Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'
import Cart from './Cart'
import ScrollToTop from './ScrollToTop'
import Page404 from './Page404'
import LoadingBar from 'react-redux-loading'





class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    const url = ["https://fakestoreapi.com/products", "https://fakestoreapi.com/products/categories",]
    dispatch(receiveProductsAsync(url[0], url[1]))

  }
  render() {
    return (
      <ScrollToTop>

      <div  >

        <Navigation />
        <LoadingBar />
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route path='/products/:id' exact component={ProductDetails} />
          <Route path="/cart" exact component={Cart} />
          <Route exact path='/categories/:category' component={Category} />
          <Route component={Page404} />
        </Switch>

        <Footer />
      </div>
      </ScrollToTop>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(App);
