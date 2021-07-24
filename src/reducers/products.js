import {RECEIVE_CATEGORIES, RECEIVE_PRODUCTS} from '../actions/actionType'





export  function products(state=[],action){

    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return [...state,...action.products]



        default:
            return state
    }



}

export  function categories(state=[],action){

    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return [...state,...action.categories]



        default:
            return state
    }



}