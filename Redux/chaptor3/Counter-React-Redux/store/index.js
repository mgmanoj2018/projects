// import {createStore} from 'redux'
import {configureStore, createSlice} from '@reduxjs/toolkit'


const counterSlice = createSlice({
    name:"counter",
    initialState:{counterVal:0},
    reducers:{
        increment:(state)=>{
            state.counterVal++
        },
        decrement:(state)=>{
            state.counterVal--
        },
        add:(state,action)=>{
            state.counterVal+=Number(action.payload.num)
        },
        subtract:(state,action)=>{
            state.counterVal-=Number(action.payload.num)
        }
    }
})
const privacySlice = createSlice({
    name:"privacy",
    initialState:false,
    reducers:{
        toogle:(state)=>{
            return state=!state   
        }
    }
})

const counterStore = configureStore({
    reducer:{counter:counterSlice.reducer,privacy:privacySlice.reducer}
})
export const counterAction = counterSlice.actions
export const privacyAction = privacySlice.actions
export default counterStore

// const initialState = {
//     counter:5,
//     privacy:false
// }


// const counterReducer = (store=initialState, action)=>{
//     console.log("action called",action);
//     // let newStore = store
//     if(action.type ==="INCREAMENT"){
//         return {...store,counter:store.counter+1}
//     }else if(action.type ==="DECREMENT"){
//         return {...store,counter:store.counter - 1}
//     }else if(action.type === "INPUT_INCREAMENT"){
//         // console.log(Number(action.payload.num))
//         return {...store,counter: store.counter + action.payload.num}
        
//     }else if(action.type==="INPUT_DECREAMENT"){
//         return{...store,counter:store.counter-action.payload.num}
//     }else if(action.type){
//         return {...store,privacy:!store.privacy}
//     }
    
//     return store
// }