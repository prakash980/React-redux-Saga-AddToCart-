import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constants"
export const addToCart = (props) => {
    console.log("addToCart action called")
    console.log(props)
    return{
        type: ADD_TO_CART,
        data: props
    }
}

export const removeFromCart = (props) => {
    console.log("removeFromCart action is called")
    console.log(props)
    return{
        type: REMOVE_FROM_CART,
        data: props
    }
}

export const emptyCart = () => {
    console.log("empty cart action was called")
    console.log()
    return{
        type: EMPTY_CART
    }
}