import React from "react";

export default function PostHeader({ username,time }) {
  return (
    <div className="row px-1">
      <div className="post-card__image">
        <img src="/assets/images/profile1.jpg" alt="profile" />
      </div>
      <div className="col-10 post-card__title">
        <div className="row flex-wrap">
          <div className="col-12 username">{username}</div>
          <div className="col-12 date">
            {time}<i className="pe-7s-world"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
