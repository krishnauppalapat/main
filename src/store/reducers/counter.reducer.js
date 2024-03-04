const initialValue={
    count:0
}
let counterReducer=(state=initialValue,action)=>{
    if(action.type==='INC'){
        return {...state,count:state.count+1}
    }
    if(action.type==='DEC'){
        return {...state,count:state.count-1}
    }
    return state
}
export default counterReducer;