import PropTypes from "prop-types";
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Product from './Product';
import Categories from './Categories'
import MidPage from './MidPage'
import Navigation from './Navigation'


function mapStateToProps({ products }) {
    return {
        products,
    };
}

class DashBoard extends Component {
    render() {
        const { products } = this.props
        return (
            <div>
                <div className="new-product">
                    <Navigation />

                </div>
                <div className="container__div">
                    <Categories />
                    <MidPage products={products} />

                </div>

            </div>
        );
    }
}

DashBoard.propTypes = {
    products: PropTypes.array
}

export default connect(
    mapStateToProps,
)(DashBoard);