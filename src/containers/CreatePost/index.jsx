import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createPost, getPostText, getPostImage } from "redux/post";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CreatePostButton from "components/CreatePostButton";
import CreatePostModal from "components/CreatePostModal";

function CreatePost(props) {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const { register, handleSubmit } = useForm();
  const { postText, postImageLink, getPostText, getPostImage, createPost ,months} = props;

  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 2000);
  };

 

  return (
    <div className="row">
      <CreatePostButton btnText=" در ذهنت چه می گذرد؟" showModal={showModal} />
      <CreatePostModal
        visible={visible}
         setVisible={setVisible}
        showModal={showModal}
        handleOk={handleOk}
        title="ایجاد پست"
        btnText="پست"
        register={register}
        handleSubmit={handleSubmit}
       
        {...props}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    postText: state.postText,
    postImageLink: state.postImageLink,
    months:state.months
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { createPost, getPostText, getPostImage },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
