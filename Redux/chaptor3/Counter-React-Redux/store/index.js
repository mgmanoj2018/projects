import {createStore} from 'redux'

const initialState = {
    counter:5,
    privacy:false
}
const counterReducer = (store=initialState, action)=>{
    console.log("action called",action);
    // let newStore = store
    if(action.type ==="INCREAMENT"){
        return {...store,counter:store.counter+1}
    }else if(action.type ==="DECREMENT"){
        return {...store,counter:store.counter - 1}
    }else if(action.type === "INPUT_INCREAMENT"){
        // console.log(Number(action.payload.num))
        return {...store,counter: store.counter + action.payload.num}
        
    }else if(action.type==="INPUT_DECREAMENT"){
        return{...store,counter:store.counter-action.payload.num}
    }else if(action.type){
        return {...store,privacy:!store.privacy}
    }
    
    return store
}
const counterStore = createStore(counterReducer)
export default counterStore