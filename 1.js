const redux = require('redux')
const createStore = redux.createStore



const BY_CAKE = 'BY_CAKE'
const BY_ICECREAM = 'BY_ICECREAM'

//reducer action only discribe what is happen dont't discribe how is happen.                                  function accepts state and action as arguments, and returns the next state of the application                function functionName(){ return object }
function byeCake(){
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



//(previousSate, action) => newState 
const initialstate = {
  numofCakes: 10,
  numoficecream :20
}

// reducer is a reducer.
const reducer = (state = initialstate, action) => {
   switch(action.type){
     case BY_CAKE: return {
      ...state,
      numofCakes: state.numofCakes - 1
     }
     case BY_ICECREAM: return {
      ...state,
      numoficecream: state.numoficecream - 1
     }
     default: return state
   }
}


//create store
const store = createStore(reducer)
//This store has three important methods. The first method of this store is called getState. It retrieves the current state of the Redux store. If we were on this, we're going to see 10 because this is the initial state of our application.The second and the most commonly used chore method is called dispatch. It lets you dispatch actions to change the state of your application. If we log this chore state after dispatch, we're going to see that it has changed.Of course, always log into the console gets boring, so we're actually going to render something to the body with the help of the third Redux store method, called subscribe. It lets you register a callback that the Redux store will call any time an action has been dispatched, so that you can update the UI of your application. It will reflect the current application state.
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Update state', store.getState()))
store.dispatch(byeCake())
store.dispatch(byeCake())
store.dispatch(byeCake())


store.dispatch(byeicecream())
store.dispatch(byeicecream())
store.dispatch(byeicecream())
unsubscribe()


































































