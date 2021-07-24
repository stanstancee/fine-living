import { RECEIVE_CATEGORIES, RECEIVE_PRODUCTS } from './actionType'
import axios from 'axios'

export const receiveProducts = (products) => {
    return {
        type: RECEIVE_PRODUCTS,
        products
    }

}
export const receiveCategories = (categories) =>{
    return {
        type:RECEIVE_CATEGORIES,
        categories
    }
}




export const receiveProductsAsync = (url1,url2) => {
    return (dispatch) => {
        return axios.all([axios.get(url1),axios.get(url2)])
            .then(axios.spread((...response)=>{
                dispatch(receiveProducts(response[0].data))
                dispatch(receiveCategories(response[1].data))
            }))
            .catch(err => console.log(err))




    }

}