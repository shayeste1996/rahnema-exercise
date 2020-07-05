import React from "react";

export default function CreatePostButton({ showModal ,btnText}) {
  return (
    <div className="col-12 add-post-card">
      <div className="row">
        <div className="add-post-card__image">
          <img src="/assets/images/profile1.jpg" alt="profile" />
        </div>
        <div className="add-post-card__btn" onClick={showModal}>
          {btnText}
        </div>
      </div>
    </div>
  );
}
