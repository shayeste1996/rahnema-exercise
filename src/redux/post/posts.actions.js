import axios from "axios";
export const GET_POST = "GET_POST";
export const ADD_POST = "ADD_POST";

export function getPost() {
  return {
    type: GET_POST,
  };
}

export function addPost(post) {
  const request = axios.post("http://localhost:3000/posts",{text:post},
  { headers: { "content-type": "application/json" }}
  );
  return (dispatch) =>
    request.then((response) =>
      dispatch({
        type: ADD_POST,
        payload: response.data,
      })
    );
}
