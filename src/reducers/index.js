
import {combineReducers}  from 'redux'
import {products,categories ,isLoading}from './products'
import cart from './cart'

import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {loadingBarReducer} from 'react-redux-loading'




const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
  blacklist:['products','categories']
}
const rootReducer = combineReducers({products,categories,isLoading, loadingBar:loadingBarReducer,cart:cart})

export default  persistReducer(persistConfig,rootReducer,)



