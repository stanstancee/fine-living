import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterProduct } from '../utils/Helpers'
import Product from './Product'
import Categories from './Categories'
import About from './About'
import {addProductToCart} from '../actions/cart'
import { Link } from 'react-router'

function mapStateToProps({ categories, products, isLoading }) {
    const id = 2;
    const productIds = new Set(products.map(product => product.id))
    const checkId = productIds.has(id)


    //If id is valid,then return all the formatted data
    if (checkId) {
        const obj = filterProduct(products, id, categories)
        return {
            obj,
            checkId,

        }
    }


    return {
        checkId,
        id,
        isLoading
    }


}

class ProductDetails extends Component {
    handleClick = ()=>{
        const {obj:{product}, dispatch} = this.props
        dispatch(addProductToCart(product))

    }

    render() {
        if (this.props.isLoading) {
            return <h6>Loading.....</h6>

        }

        const { product, otherProducts, otherCategories } = this.props.obj

        return (
            <div>
                <div className="product-details-container container__div">
                    <div className="product-details">
                        <div className="image-container">
                            <img src={product.image} alt={product.title}></img>
                        </div>
                        <div className="details">
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <h4><span>price</span>: ${product.price}</h4>
                            <button className="btn-primary">Add to cart</button>
                        </div>
                    </div>
                    <div className="description">
                        <article>
                            <h3>Features</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </article>
                        <aside>
                            <h3>Why you should buy from us</h3>
                            <ul>
                                <li><span>24hrs</span> Customer Service</li>
                                <li><span>12hrs</span> Delivery</li>
                                <li>Reliable Product</li>
                                <li>Consumers good feedbacks</li>
                            </ul>

                        </aside>
                    </div>
                </div>
                <div className="container__div">

                    <h5>More products</h5>
                    <div className="products">
                        {otherProducts.map((product, index) => <Product key={index} product={product} />)}

                    </div>

                    <Categories categories={otherCategories} />
                    <About />
                </div>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(ProductDetails);