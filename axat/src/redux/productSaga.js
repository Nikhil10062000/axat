import { takeEvery, put } from "redux-saga/effects";
import {
  HOME,
  PRODUCT_LIST,
  SEARCH_PRODUCT,
  SET_PRODUCT_LIST,
  SMART_PHONE,
  GROSS,
  CREATE,
} from "./constant";

function* getProducts() {
  let data = yield fetch("https://dummyjson.com/products");
  data = yield data.json();

  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProducts(data) {
  let url = `https://dummyjson.com/products/search?q=${data.query}`;
  let result = yield fetch(url);
  result = yield result.json();

  yield put({ type: SET_PRODUCT_LIST, data: result });
}

function* getSmartPhone() {
  let data = yield fetch("https://dummyjson.com/products/category/smartphones");
  data = yield data.json();

  yield put({ type: SET_PRODUCT_LIST, data });
}

function* homeDecor() {
  let data = yield fetch(
    "https://dummyjson.com/products/category/home-decoration"
  );
  data = yield data.json();

  yield put({ type: SET_PRODUCT_LIST, data });
}

function* groceries() {
  let data = yield fetch("https://dummyjson.com/products/category/groceries");
  data = yield data.json();

  yield put({ type: SET_PRODUCT_LIST, data });
}

function* create(set) {
  let data = yield fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(set)
  })
  let result = yield data.json()

  yield put({ type: SET_PRODUCT_LIST, data: result });
}




function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProducts);
  yield takeEvery(SMART_PHONE, getSmartPhone);
  yield takeEvery(HOME, homeDecor);
  yield takeEvery(GROSS, groceries);
  yield takeEvery(CREATE , create)
}

export default productSaga;
