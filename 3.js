const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers  = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()




const BY_CAKE = 'BY_CAKE'
const BY_ICECREAM = 'BY_ICECREAM'


function byecake(){
  return {
   type: BY_CAKE,
   info: "First redux Action",
  }
 }
 
function byeicecream(){
  return {
  type: BY_ICECREAM,
  info: "Second redux Action",
  }
}
 

const initialcakestate = {
  numofcakes :10
}
const initialicecreamstate = {
  numoficecream :20
}



// reducer 1
const cakereducer = (state = initialcakestate, action) => {
  switch(action.type){
    case BY_CAKE: return {
     ...state,
     numofcakes: state.numofcakes - 1
    }
    default: return state
  }
}


// reducer 2
const icecreamreducer = (state = initialicecreamstate, action) => {
  switch(action.type){

    case BY_ICECREAM: return {
     ...state,
     numoficecream: state.numoficecream - 1
    }
    default: return state
  }
}





const rootreducer = combineReducers({
  cake: cakereducer,
  icecream: icecreamreducer
})
const store = createStore(rootreducer, applyMiddleware(logger))
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(byecake())
store.dispatch(byecake())
store.dispatch(byecake())


store.dispatch(byeicecream())
store.dispatch(byeicecream())
store.dispatch(byeicecream())
unsubscribe()








































