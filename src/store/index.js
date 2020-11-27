import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { staticReducers } from './reducer'

const _DEV_ = process.env.NODE_ENV === 'development'

// Configure the store
export default function configureStore() {
  let middleware = _DEV_
  ? composeWithDevTools({ trace: true })(applyMiddleware(thunkMiddleware))
  : applyMiddleware(thunkMiddleware)

  const persistConfig = {
    key: 'root',
    storage,
  }
  const persistReducers = persistReducer(persistConfig, createReducer())
  const store = createStore(persistReducers, {}, middleware)
  const persistor = persistStore(store)

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {}

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer
    store.replaceReducer(createReducer(store.asyncReducers))
  }

  // Return the modified store
  return {store, persistor}
}

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers
  })
}
