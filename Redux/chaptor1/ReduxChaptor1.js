const redux = require("redux");

const initialSate = {
    counter :0
}

const reducer = (store=initialSate,action)=>{
    let newStore = store
    console.log("reducer called" ,action)
    if(action.type==="INCREAMENT"){
        return {counter:store.counter + 1}
    }else if(action.type === "DECREAMENT"){
        return {counter :store.counter -1}
    }else if(action.type === "ADD"){
        return {counter : store.counter + action.payload.number}
    }
    return newStore
}

const store = redux.createStore(reducer)
const subscriber = ()=>{
    const state =store.getState();
    console.log(state)
}
store.subscribe(subscriber)
store.dispatch({type:"INCREAMENT"})
store.dispatch({type:"DECREAMENT"})
store.dispatch({type:"ADD", payload:{number:7}})