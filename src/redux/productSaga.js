//Generator Function
//when we do async operation and when the async operation is done then it returns the result.
//when we use generator function we always use yield.
import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST, SEARCHED_PRODUCT } from "./constants";

function* getProducts() {
  let data = yield fetch(" http://localhost:3100/product"); 
  data = yield data.json();
//   console.log("getProducts in productSaga Is Called", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchedProducts(data) {
  let result = yield fetch(` http://localhost:3100/product?q=${data.query}`); 
  result = yield result.json();
  yield put({ type: SET_PRODUCT_LIST, data: result });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCHED_PRODUCT, searchedProducts )
  //takeEvery takes two argument.
  //1.type: jo hum action mai define karenge ki hame kaun ka use karna hai
  //2. call function - hume isse ek function call karvani padhti hai. Iske andar hum apni api call karenge
}

export default productSaga;
