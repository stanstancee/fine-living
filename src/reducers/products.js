import {RECEIVE_CATEGORIES, RECEIVE_PRODUCTS,IS_LOADING} from '../actions/actionType'





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

export function isLoading(state=true,action){
    switch(action.type){
        case IS_LOADING:
            return action.loading
        default:
            return state
    }




}