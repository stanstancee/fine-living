import PropTypes from "prop-types";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categories from './Categories'
import Product from './Product'
import About from './About'


function mapStateToProps({ products,categories }) {
    const newProduct = products.slice(-1)
    return {
        newProduct,
        products,
        categories
    };
}

class DashBoard extends Component {
    render() {
        const { newProduct, products,categories } = this.props

        return (
            <main>
                <section className="section">
                    {newProduct.map((product, index) =>
                        <div className="new-product" key={index}>
                            <div className="first">
                                <h3>new product</h3>
                                <h1>{product.title}</h1>
                                <p>{product.description}</p>
                                <button className="btn-primary">SEE product</button>
                            </div>
                            <div className="second">
                                <img src={product.image} alt={product.title}></img>
                            </div>

                        </div>)}
                </section>


                <div className="container__div">
                <Categories categories={categories} />
                    <div className="products">
                        {products.map((product, index) => <Product key={index} product={product} />)}
                    </div>
                    <About />

                </div>

            </main>
        );
    }
}

DashBoard.propTypes = {
    products: PropTypes.array
}

export default connect(
    mapStateToProps,
)(DashBoard);