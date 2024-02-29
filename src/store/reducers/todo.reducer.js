const initialState={
    todos:[
        
    ]
}
function todoReducer(state=initialState,action){
    if(action.type==='ADDTASK'){
        return{...state,todos:[...state.todos,action.payload]}
    }
    if(action.type==='DELETE'){
        // console.log(action.type)
        return{...state,todos:[...state.todos.filter((t,i)=>i!==action.payload)]}

    }
    if(action.type==='DONE'){
        let temp={...state.todos};
        
    }
    return state;
}
export default todoReducer;