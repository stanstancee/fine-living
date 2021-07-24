import React, { Component, } from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount, removeCart } from '../actions/cart';

const MyCart = (props) => {
    const { cart, increment, decrement, remove, index } = props
    return (
        <div>
            <p>{cart.title}</p>
            <p>{cart.quantity}</p>
            <h1 onClick={() => increment(cart.id)}>+</h1>
            <h1 onClick={() => decrement(cart.id)}>-</h1>
            <h2 onClick={()=> remove(index)}>delete</h2>

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
    remove = (index) =>{
        const{dispatch} = this.props
        dispatch(removeCart(index))
    }
    render() {
        return (
            <div>
                {this.props.cart.map((cart,index) =>
                <MyCart index={index} cart={cart} key={index} increment={this.increment} decrement={this.decrement} remove={this.remove} />)}

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Cart);