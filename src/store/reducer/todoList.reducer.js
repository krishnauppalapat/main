const initialState={
    list:[]
}
const todoListReducer=(state=initialState,action)=>{
    if(action.type==='ADDTODO'){
        return{...state,list:[...state.list,action.payload]}
    }
    return state
    

}
export default todoListReducer;