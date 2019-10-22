//创建store 对象
import { createStore } from 'redux';
import counteeReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(counteeReducer, composeWithDevTools());


export default store;
