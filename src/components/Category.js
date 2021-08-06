import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom'
import { filterCategory,checkEven,filterProduct } from '../utils/Helpers'
import Categories from './Categories'
import About from './About'

function mapStateToProps({ products,categories }) {

   


    const category = filterCategory("electronics", products)
    const categoryList = filterCategory("electronics", categories, false)

    return {
        category,
        categoryList

    };
}

class Category extends Component {

    render() {
        const {category,categoryList} = this.props
        return (
            <div>
                <div className="topic">
                    <h2>electronics</h2>
                </div>

            <div className="container__div">
                {category.slice(0).reverse().map((product, index) =>{
                const {image,title, description} = product

                return(
                        <div className={checkEven(index)? "category":"category-reverse"} key={index}>
                            <div className="image-container">
                                <img src={image} alt={product.title}></img>
                            </div>
                            <div className="first">
                               {index=== 0 && <h4>new product</h4>}
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <button className="btn-primary">SEE product</button>

                            </div>


                        </div>)})}
                        <Categories categories={categoryList} />
                        <About />

            </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Category);