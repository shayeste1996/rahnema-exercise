import React, { useState, useEffect } from "react";
import { Modal, Spin } from "antd";
import { SmileOutlined, ArrowRightOutlined } from "@ant-design/icons";
import CreatePostFooter from "../CreatePostFooter";
import Dum from "./Dum";
export default function CreatePostModal({
  visible,
  setVisible,
  handleOk,
  title,
  btnText,
  register,
  handleSubmit,
  postHandler,
  postText,
  postImageLink,
  getPostText,
  getPostImage,
  createPost,
  months,
}) {
  const [uploadPage, setUploadPage] = useState(false);
  const [text, setText] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [loading, setLoading] = useState(false);

  const date = new Date();
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let month = months[date.getMonth()];
  let time = `${day} ${month} ساعت ${hour}:${minute}`;

  const handleCancel = () => {
    setVisible(false);
    if (postImageLink.length === 0) {
      setImageLink("");
    }
  };
  const uploadPageHandler = () => {
    setUploadPage(true);
  };
  const closeModal = () => {
    setUploadPage(false);
    setText("");
    setImageLink("");
  };
  const goBack = () => {
    if (postImageLink.length > 0) {
      setUploadPage(false);
    } else {
      setUploadPage(false);
      setImageLink("");
    }
  };
  const saveImageLink = () => {
    setUploadPage(false);
    getPostImage(imageLink);
  };
  useEffect(() => {
    if (imageLink.length === 0) {
      getPostImage("");
    }
  }, [imageLink, getPostImage]);

  const savePost = (e) => {
    e.preventDefault();
    createPost(text, postImageLink, setLoading, setVisible,time);
    // !loading && setVisible(false);
    console.log(loading);
  };
  return (
    <Modal
      wrapClassName={`create-post-modal + ${uploadPage && "center-title"}`}
      bodyStyle={{ height: "250px" }}
      visible={visible}
      title={uploadPage ? "ارسال عکس" : title}
      onOk={handleOk}
      afterClose={closeModal}
      onCancel={handleCancel}
      closable={false}
      footer={
        !uploadPage
          ? [
              <CreatePostFooter
                btnText="عکس/ویدیو"
                key="upload"
                uploadPageHandler={uploadPageHandler}
                uploadPage={uploadPage}
                upload
              />,
              <CreatePostFooter btnText="برچسب گذاری ..." key="tag" tag />,
            ]
          : null
      }
    >
      <form onSubmit={savePost}>
        {!uploadPage ? (
          <div className="row px-1">
            <div className="col-3">
              <SmileOutlined className="smile-icon" />
            </div>
            <div className="col-9">
              <textarea
                name="text"
                rows="8"
                cols="41"
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="post-textarea"
                ref={register({ required: true, maxLength: 20 })}
                placeholder="در ذهنت چه می گذرد؟"
              />
            </div>
            <div className="col-12">
              <button
                type="submit"
                disabled={text.length === 0}
                className="post-btn"
              >
                {loading ? <Spin /> : btnText}
              </button>
            </div>
          </div>
        ) : (
          <div className="row justify-content-center">
            <ArrowRightOutlined className="back-arrow" onClick={goBack} />
            <div className="col-9">
              <input
                name="image"
                className="comment__input mt-1"
                placeholder="لینک عکس را وارد کنید"
                value={imageLink}
                ref={register({ required: true })}
                onChange={(e) => setImageLink(e.target.value)}
              />
              <button
                className="post-btn mt-1"
                disabled={imageLink.length === 0}
                onClick={saveImageLink}
              >
                انجام شد
              </button>
            </div>
          </div>
        )}
      </form>
    </Modal>
  );
}
