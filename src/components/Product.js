import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addProductToCart} from '../actions/cart'


class Product extends Component {


    handleClick = ()=>{
        const {product, dispatch} = this.props
        dispatch(addProductToCart(product))

    }
    render() {

        return (
            <div onClick={this.handleClick}>
                {this.props.product.title}

            </div>
        );
    }
}

export default connect()(Product);