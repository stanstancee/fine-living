import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { filterCategory, checkEven } from '../utils/Helpers'
import Categories from './Categories'
import About from './About'

function mapStateToProps({ products, categories }, ownProps) {

    const id = ownProps.match.params.category


    const category = filterCategory(id, products)
    const categoryList = filterCategory(id, categories, false)
    const title = categories.find(category => category === id)

    return {
        category,
        categoryList,
        title

    };
}

class Category extends Component {

    render() {
        const { category, categoryList,title } = this.props
        return (
            <div>


                <div className="container__div">
                <div className="topic">
                    <h2>{title}</h2>
                </div>
                    {category.slice(0).reverse().map((product, index) => {
                        const { image, title, description } = product

                        return (
                            <div className={checkEven(index) ? "category" : "category-reverse"} key={index}>
                                <div className="image-container">
                                    <img src={image} alt={product.title}></img>
                                </div>
                                <div className="first">
                                    {index === 0 && <h4>new product</h4>}
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                    <div>
                                    <Link to={`/products/${product.id}`}>
                                        <button className="btn-primary">SEE product</button>
                                    </Link>
                                    </div>


                                </div>


                            </div>)
                    })}
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