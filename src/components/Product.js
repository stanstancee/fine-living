import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


class Product extends Component {

    render() {
        const { product, } = this.props
        const { title, image ,id} = product
        return (
            <div className="product">
                <div className="image-container">
                    <img src={image} alt={title}></img>
                </div>
                <div>
                    <h2>{title}</h2>
                </div>

                <div>
                    <Link to={`/products/${id}`} >   <button className="btn-primary" > See product</button> </Link>
                </div>

            </div>
        );
    }
}

export default connect()(Product);