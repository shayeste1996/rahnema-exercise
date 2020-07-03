import React, { useState } from "react";
import { Modal } from "antd";
import { connect } from "react-redux";
import { addPost } from "../redux/post";
import { bindActionCreators } from "redux";
import { useForm } from "react-hook-form";
import { SmileOutlined, PictureOutlined, TagOutlined } from "@ant-design/icons";
import PostCard from "./PostCard";

const AddPostCard = ({ newPost, addPost }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) =>addPost(data.text)
   const [textValue,setTextValue]=useState("")

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
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
  const handleCancel = () => {
    setVisible(false);
  };
  console.log(newPost)

  return (
    <div className="row justify-content-center mt-2">
      <div className="col-5">
        <div className="row">
          <div className="col-12 add-post-card">
            <div className="row">
              <div className="add-post-card__image">
                <img src="/assets/images/profile1.jpg" alt="profile" />
              </div>
              <div className="add-post-card__btn" onClick={showModal}>
                در ذهنت چه می گذرد؟
              </div>
              <Modal
                visible={visible}
                title="ایجاد پست"
                onOk={handleOk}
                onCancel={handleCancel}
                closable={false}
                footer={[
                  <button
                    key="upload"
                    className="upload-btn"
                    onClick={handleOk}
                  >
                    <PictureOutlined />
                    <span>عکس/ویدیو</span>
                  </button>,
                  <button
                    key="tag"
                    loading={loading}
                    onClick={handleOk}
                    className="upload-btn"
                  >
                    <TagOutlined />
                    <span>برچسب گذاری ...</span>
                  </button>,
                ]}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row px-1">
                    <div className="col-3">
                      <SmileOutlined className="smile-icon" />
                    </div>
                    <div className="col-9">
                      <textarea
                        name="text"
                        value={textValue}
                        onChange={(e)=>setTextValue(e.target.value)}
                        className="post-textarea"
                        ref={register({ required: true, maxLength: 20 })}
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" disabled={textValue.length ===0} className="post-btn"  >پست</button>
                    </div>
                  </div>
                </form>
              </Modal>
            </div>
          </div>
          <PostCard />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    newPost: state.newPost,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addPost: addPost }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(AddPostCard);
