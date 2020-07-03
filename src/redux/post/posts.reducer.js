import * as Actions from "./posts.actions";

const initialState = {newPost:""};


const postReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_POST: {
      return {
        ...state,
      };
    }
    case Actions.ADD_POST: {
        return {
          ...state,
          newPost:action.payload.text, ...state.newPost
        };
      }
    default: {
      return state;
    }
  }
};
export default postReducer;
