import { combineReducers } from 'redux'
import subredditsReducer from './subreddits-reducer'

export default combineReducers({
  subreddits: subredditsReducer
})
