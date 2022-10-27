import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function Cakecontainer(props) {
 return (
  <div>
    <h2>Number of Cake - {props.numofCakes}</h2>
    <button onClick={props.buyCake}>Buy Cake</button>
  </div>
 )
}


// mapStateToProps is used for selecting the part of the data from the store that the connected component needs
// It is called every time the store state changes.
// It receives the entire store state, and should return an object of data this component needs.
//function mapStateToProps(state, ownProps?)
//It should take a first argument called state, optionally a second argument called ownProps, and return a plain object containing the data that the connected component needs.
//It does not matter if a mapStateToProps function is written using the function keyword (function mapState(state) { } ) or as an arrow function (const mapState = (state) => { } ) - it will work the same either way.

//Whenever the store changes, all of the mapStateToProps functions of all of the connected components will run. Because of this, your mapStateToProps functions should run as fast as possible. This also means that a slow mapStateToProps function can be a potential bottleneck for your application.
const mapStateToProps = (state) =>{
  return{
    numofCakes: state.numofCakes
  }
}


//dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.
//With React Redux, your components never access the store directly - connect does it for you. React Redux gives you two ways to let components dispatch actions:
//By default, a connected component receives props.dispatch and can dispatch actions itself.
//connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called, and pass those functions as props to your component.
//Providing a mapDispatchToProps allows you to specify which actions your component might need to dispatch. It lets you provide action dispatching functions as props. Therefore, instead of calling props.dispatch(() => increment()), you may call props.increment() directly. There are a few reasons why you might want to do that.
const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  } 
}

export default connect(mapStateToProps, mapDispatchToProps) (Cakecontainer)
