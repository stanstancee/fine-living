
import {combineReducers}  from 'redux'
import {products,categories }from './products'
import cart from './cart'

import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web




const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}
const rootReducer = combineReducers({products,categories,cart:cart})

export default  persistReducer(persistConfig, rootReducer)



