const initialState={
    count:0
}
function counterReducer(state=initialState,action){
    if(action.type==='INC'){
        console.log('state',state);
        console.log("action",action);
        return {...state,count:state.count+1}
   }
   if(action.type==='DEC'){
    return{...state,count:state.count-1}
   }
   if(action.type==='RESET'){
    return initialState
}
return state;
}
export default counterReducer;