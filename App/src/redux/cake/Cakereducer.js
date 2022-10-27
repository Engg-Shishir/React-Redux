const { BUY_CAKE } = require("./Caketypes")

const initialstate = {
 numofCakes : 10
}

const cakeReducer = (state = initialstate, action) => {
  switch(action.type){
   case BUY_CAKE: return{
    ...state,
    numofCakes : state.numofCakes - 1
   }

   default: return state
  }
}

export default cakeReducer




