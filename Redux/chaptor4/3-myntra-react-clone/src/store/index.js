import {configureStore} from '@reduxjs/toolkit'
import itemSlice from './ItemSlice'
import fetchStatusSlice from './FetchStatusSlice'
import bagSlice from './bagSlice'


const myntrastore = configureStore({
    reducer:{
        items:itemSlice.reducer,
        fetchStatus:fetchStatusSlice.reducer,
        bag:bagSlice.reducer
    }
})

export default myntrastore