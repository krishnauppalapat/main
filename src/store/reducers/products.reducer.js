import { allproducts } from "./productsdata";
const initialState={
    products:[...allproducts.products ],
    cart:[]
}
const productsReducer=function(state=initialState,action){
    if(action.payload==='ADDTOCART'){
        return{...state,cart:[...state.cart,action.payload]}
    }
    return state

}
    
export default productsReducer