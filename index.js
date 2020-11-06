const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// action creator
function buyCake(){
  return {
    type: BUY_CAKE,
    info: 'First Redux Action'
  }
}

function buyIceCream(){
  return {
    type: BUY_ICECREAM
  }
}

// the application state must be represented by a single object
// a reducer takes the previousState and an action and returns a new State object

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20
// }

const initialCakeState = {
  numOfCakes: 10
}

const initialIceCreamState = {
  numOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type){
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes -1
    }
    default: return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type){
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams -1
    }
    default: return state
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

// clear the terminal
console.clear()

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state:', store.getState())

// subscribe to changes in the state
const unscribe = store.subscribe(()=> {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unscribe()
