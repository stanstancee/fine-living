import {ADD_PRODUCT_TO_CART,INCREMENT_CART_COUNT, DECREMENT_CART_COUNT,REMOVE_PRODUCT_FROM_CART} from './actionType'

export const addProductToCart = (product)=>{
    return{
        type:ADD_PRODUCT_TO_CART,
        payload:{
            product
        }

    }
}

export const incrementCount = (index)=>{
    return{
        type:INCREMENT_CART_COUNT,
        index

    }

}


export const decrementCount = (index)=>{
    return{
        type:DECREMENT_CART_COUNT,
        index

    }

}

export const removeCart = index =>{
    return {
        type:REMOVE_PRODUCT_FROM_CART,
        index
    }
}