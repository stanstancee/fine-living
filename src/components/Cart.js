import React, { Component, } from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount, removeCart } from '../actions/cart';
import { Plus, Dash, Trash } from 'react-bootstrap-icons'
import PayPal from './PayPal'
const MyCart = (props) => {

    const { cart, increment, decrement, remove, index } = props
    return (
        <div className="cart">


            <div className="image-container">
                <img src={cart.image} alt={cart.title}></img>
            </div>
            <p>{cart.title}</p>
            <p>${cart.price}</p>
            <div className="cart-quantity">
                <Plus onClick={() => increment(cart.id)} size="30" /><p>{cart.quantity ? cart.quantity : 1}</p>  <Dash onClick={() => decrement(cart.id)} size="30" />

            </div>
            <div>
                <Trash size="30" color="#DB7C4C" onClick={() => remove(index)} />

            </div>



        </div>
    )
}

function mapStateToProps({ cart }) {
    return {
        cart

    };
}

class Cart extends Component {
    increment = (index) => {
        const { dispatch } = this.props
        dispatch(incrementCount(index))
    }
    decrement = (index) => {
        const { dispatch } = this.props
        dispatch(decrementCount(index))
    }
    remove = (index) => {
        const { dispatch } = this.props
        dispatch(removeCart(index))
    }
    calcTotal = (arr) => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.quantity ? (currentValue.price * currentValue.quantity) : currentValue.price;
        return arr.reduce(reducer, 0)

    }
    render() {
        const total = this.calcTotal(this.props.cart)
        const shipping = 50
        const vat = 60
        const GrandTotal = total + shipping + vat
        return (
            <div className="container__div">
                <div className="topic">
                    <h2>Cart</h2>
                </div>

                <div className="cart-container">

                    <div className="checkout">



                        <form>
                            <div>
                                <h4>billing details</h4>
                                <div className="form-group">
                                    <label htmlFor="name">
                                        Name:
                                    </label>
                                    <input type="text" placeholder="Stanley Luke" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        Email:
                                    </label>
                                    <input type="email" placeholder="stan@email.com" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">
                                        Phone:
                                    </label>
                                    <input type="tel" placeholder="+23481491819" required />
                                </div>

                            </div>
                            <div>
                                <h4>shipping info</h4>
                                <div className="form-group address">
                                    <label htmlFor="address">
                                        Address:
                                    </label>
                                    <input type="text" placeholder="2A john's street" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="zip">
                                        Zip Code:
                                    </label>
                                    <input type="number" placeholder="344" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">
                                        City:
                                    </label>
                                    <input type="text" placeholder="Ikeja" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="country">
                                        Country:
                                    </label>
                                    <input type="text" placeholder="Nigeria" required />
                                </div>
                            </div>
                        </form>
                        <PayPal total={GrandTotal.toFixed(2)} />

                    </div>
                    {this.props.cart.length ?
                        <div>
                            <div className="cart-header">
                                <h5>image</h5>
                                <h5>name</h5>
                                <h5>price</h5>
                                <h5>quantity</h5>
                                <div></div>

                            </div>
                            {this.props.cart.map((cart, index) =>
                                <MyCart index={index} cart={cart} key={index} increment={this.increment} decrement={this.decrement} remove={this.remove} />)}
                            <div>
                                <div className="cart-summary">
                                    <div>
                                        <p>TOTAL</p>
                                        <p>SHIPPING</p>
                                        <p>VAT</p>
                                    </div>
                                    <div className="summary">
                                        <h4>${total.toFixed(2)}</h4>
                                        <h4>${shipping}</h4>
                                        <h4>${vat}</h4>
                                    </div>
                                </div>
                                <div className="grand-total">
                                    <p>GRAND TOTAL</p>
                                    <h4>${GrandTotal.toFixed(2)}</h4>
                                </div>


                            </div>
                        </div> : <h1>Cart is empty</h1>
                    }
                </div>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Cart);