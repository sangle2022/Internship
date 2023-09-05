import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import 
  {productListReducer,
  productDetailsReducer}
 from "./Reducers/CardReducer";


const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  
});

const middleware = [thunk];
const store = createStore(
  reducer,

  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;