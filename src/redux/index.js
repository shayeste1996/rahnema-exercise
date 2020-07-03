import { createStore ,applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import reducer from "./post/posts.reducer";


export default createStore(reducer, applyMiddleware(thunk));
