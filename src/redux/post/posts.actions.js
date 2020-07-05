import axios from "axios";
export const GET_POSTTEXT = "GET_POSTTEXT";
export const GET_POSTIMAGE = "GET_POSTIMAGE";

export const CREATE_POST = "CREATE_POST";
export const UPLOAD_TAG = "UPLOAD_TAG";

export function createPost(text, image, setLoading, setVisible,time,setError) {
  setLoading(true);
  const request = axios.post(
    "http://localhost:3000/posts",
    { text, image ,time},
    { headers: { "content-type": "application/json" } }
  );
  return (dispatch) =>
    request
      .then(
        (response) => {
          if (response.status === 201) {
            localStorage.setItem("post", JSON.stringify(response.data));
            dispatch({
              type: CREATE_POST,
              payload: response.data,
            });
            setTimeout(() => {
              setLoading(false)
              setVisible(false)
            }, 1000);
            setError(false);
          }
        }
        //  console.log(response.status,response.statusText)
      )
      .catch((err) => {
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(err.code);
          console.log(err.message);
          console.log(err.name);
        }
      });
}
export function getPostText(text) {
  return {
    type: GET_POSTTEXT,
    payload: text,
  };
}
export function getPostImage(image) {
  return {
    type: GET_POSTIMAGE,
    payload: image,
  };
}
