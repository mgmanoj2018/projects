import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemAction } from '../store/ItemSlice';
import { fetchStatusActions } from '../store/FetchStatusSlice';

const FetchItems = () => {
   const fetchStatus = useSelector(store=>store.fetchStatus);
//    console.log("fetching status",fetchStatus.fetchDone)
   const dispatch =  useDispatch()
    // console.log(dispatch(fetchStatusAction.makeFetchDone()))
   useEffect(()=>{
    if(fetchStatus.fetchDone) return
    const controller = new AbortController();
    const signal = controller.signal
    dispatch(fetchStatusActions.markFetchingStarted());
    fetch('http://localhost:8080/items' ,{signal})
    .then(res=>res.json())
    .then(({items})=>{
        dispatch(fetchStatusActions.markFetchDone());
        
         dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemAction.addInitiaItems(items))
    })
    return ()=>{
        controller.abort()
    }
   },[fetchStatus])
  
  return (
    <>
        
    </>
  )
}

export default FetchItems