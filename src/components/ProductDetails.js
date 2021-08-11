import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterProduct } from '../utils/Helpers'
import Product from './Product'
import Categories from './Categories'
import About from './About'
import {addProductToCart} from '../actions/cart'
import Page404 from './Page404'




function mapStateToProps({ categories, products, isLoading },ownProps) {
    const id = parseInt(ownProps.match.params.id)

    const productIds = new Set(products.map(product => product.id))
    const checkId = productIds.has(id)



    //If id is valid,then return all the formatted data
    if (checkId) {
        const obj = filterProduct(products, id, categories)
        return {
            obj,


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
        const {obj, isLoading, checkId, id} = this.props
        if (isLoading) {
            return <div className="spin"></div>




        }


        if(checkId === false){
            return <Page404 id={id} />
        }
        const { product, otherProducts, otherCategories } = obj

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
                            <button className="btn-primary" onClick={this.handleClick}>Add to cart</button>
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

                    <h3 className="heading">More products</h3>
                    <div className="products">
                        {otherProducts.map((product, index) => <Product location={this.props.location.pathname} key={index} product={product} prd = {true} />)}

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