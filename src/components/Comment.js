import React from "react";

const Comment = () => {
  return (
    <div className="comment">
      <div>مرتبط ترین</div>
      <div className="row mt-2">
        <i className="pe-7s-smile smile-icon" />
        <div className="col-10">
          <input className="comment__input" placeholder="نظری بنویسید ..." />
        </div>
      </div>
      <div className="row m-1">
        <div className="comment__profile--image">
          <img src="/assets/images/profile1.jpg" alt="profile" />
        </div>
        <div className="col-8">
          <div className="comment__box">
            <div className="comment__box--username">shayeste</div>
            <div className="comment__box--text">
              I explain: Gmail has a ′′ function . If you run out of connection
              everything continues working wonders (Obviously not being able to
              send or receive emails
            </div>
          </div>
          <div className="comment__reactions">
            <ul>
              <li>
                <span className="divider">&nbsp;·&nbsp;</span>
                <span>پسند</span>
              </li>
              <li>
                <span className="divider">&nbsp;·&nbsp;</span>
                <span>پاسخ</span>
              </li>{" "}
              <li>
                <span className="divider">&nbsp;·&nbsp;</span>
                <span>دیدن ترجمه</span>
              </li>
              <li>
                <span className="divider">&nbsp;·&nbsp;</span>
                <span>1 هفته</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row m-1">
        <div className="comment__profile--image">
          <img src="/assets/images/profile1.jpg" alt="profile" />
        </div>
        <div className="comment__box col-8">
          <div className="comment__box--username">shayeste</div>
          <div className="comment__box--text">
            I explain: Gmail has a ′′ function . If you run out of connection
            everything continues working wonders (Obviously not being able to
            send or receive emails
          </div>
        </div>
      </div>
      <div className="row m-1">
        <div className="comment__profile--image">
          <img src="/assets/images/profile1.jpg" alt="profile" />
        </div>
        <div className="comment__box col-8">
          <div className="comment__box--username">shayeste</div>
          <div className="comment__box--text">
            I explain: Gmail has a ′′ function . If you run out of connection
            everything continues working wonders (Obviously not being able to
            send or receive emails
          </div>
        </div>
      </div>
      <div className="row justify-content-between comment__footer">
        <div className="col-6">
          <span className="show-coments"> دیدن سایر نظرها</span>
        </div>
        <div className="col-3 pages">
          <span>2 از 203</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
