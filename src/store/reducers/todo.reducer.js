const initialState={
    todos:[

    ],
    filteredTodos:[]
}
function todoReducer(state=initialState,action){
    state.filteredTodos=[...state.todos]
    if(action.type==='ADDTASK'){
        return{...state,todos:[...state.todos,{title:action.payload,status:false}],filteredTodos:[...state.todos,{title:action.payload,status:false}]}
    }
    if(action.type==='DELETE'){
        // console.log(action.type)
        return{...state,todos:[...state.todos.filter((t,i)=>i!==action.payload)]}

    }
    if(action.type==='DONE'){
        // let t=state.todos.find((e,i)=>i===action.payload)
        state.todos[action.payload].status=true
       return {...state,todos:[...state.todos]}
        
    }
    if(action.type==='NOTDONE'){
        return{...state,filteredTodos:[...state.todos.todos.filter(todo=>!todo.status)]}
    }
    return state;
}
export default todoReducer;