
/**
 * Remove comment to see actions on the the console
 */
//import logger from './logger'


import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

export default applyMiddleware(thunk)