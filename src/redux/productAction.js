import { PRODUCT_LIST, SEARCHED_PRODUCT } from "./constants";

export const productList = () => {
    
    return{
        type: PRODUCT_LIST
    }
}

export const productSearch = (query) => {
        return{
        type: SEARCHED_PRODUCT,
        query
    }
}

// export const setProductList = (data) =>{
//     console.log("Set Action")
//     return{
//         type: SET_PRODUCT_LIST,
//         data
//     }
// }