import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductToCart } from '../actions/cart'


class Product extends Component {

    render() {
        const { product } = this.props
        const { title, image } = product
        return (
            <div className="product">
                <div className="image-container">
                    <img src={image} alt={title}></img>
                </div>
                <div>
                <h2>{title}</h2>
                </div>

                <div>
                    <button className="btn-primary">See product</button>
                </div>

            </div>
        );
    }
}

export default connect()(Product);