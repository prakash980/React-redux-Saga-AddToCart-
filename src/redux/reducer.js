import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constants";

export const cartData = (data = [], action) => {
  //cartData should have 2 argument to pass. Inital Value and action.
  //here we have passed a blank array as initail value i.e data=[] and action as second parameter.
  //action argument contain the type and data that is there in action.js file.
  switch(action.type){
      case ADD_TO_CART:
        console.log("AddToCartReducer is called here", action)
        //Your Add To Cart Logic Here
        return [action.data, ...data]
      case REMOVE_FROM_CART:
        console.log("RemoveFromCartReducer is called here")
        console.log(action)
        //Your Add To Cart Logic Here
        // data.length = data.length? data.length - 1:[];
        const remainingItem = data.filter((item)=> item.id!==action.data);
        return [...remainingItem];
      case EMPTY_CART:
        console.log("Empty Cart Reducer is called");
        console.log(action)
        data = []
        return [...data];
      default: 
        return data;
  }
};
