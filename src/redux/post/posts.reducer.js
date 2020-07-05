import * as Actions from "./posts.actions";
const months = [
  "ژانویه",
  "فوریه",
  "مارس",
  "آوریل",
  "مه",
  "ژوئن",
  "ژوئیه",
  "اوت",
  "سپتامبر",
  "اکتبر",
  "نوامبر",
  "دسامبر ",
];

const posts = [JSON.parse(localStorage.getItem("post"))];
const initialState = { posts,months, postText: "", postImageLink: "" };

const postReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_POSTTEXT: {
      return {
        ...state,
        postText: action.payload,
      };
    }
    case Actions.GET_POSTIMAGE: {
      return {
        ...state,
        postImageLink: action.payload,
      };
    }
    case Actions.CREATE_POST: {
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    }

    default: {
      return state;
    }
  }
};
export default postReducer;
