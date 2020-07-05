import React, { useState, Fragment } from "react";


import { PictureOutlined, TagOutlined } from "@ant-design/icons";

export default function CreatePostFooter({
  btnText,
  upload,
  uploadPageHandler,
  uploadPage,
}) {

  return (
    <Fragment>
      <button className="upload-btn" onClick={uploadPageHandler}>
        {upload ? <PictureOutlined /> : <TagOutlined />}
        <span>{btnText}</span>
      </button>

    </Fragment>
  );
}
