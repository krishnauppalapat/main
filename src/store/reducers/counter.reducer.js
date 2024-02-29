const initialState={
    count:0
}
const counterReducer=function(state=initialState,action){
   if(action.type==='INCREMENT'){
    return{...state,count:state.count+1}
   }
   if(action.type==='DECREMENT'){
    return{...state,count:state.count-1}
   }
   if(action.type==='RESET'){
    console.log(initialState)
    return{...state,count:initialState.count}
   }
   return state
}
export default counterReducer;