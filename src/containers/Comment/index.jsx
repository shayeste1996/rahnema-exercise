import React from "react";
import CommentForm from "../CommentForm";
import CommentsList from "../CommentsList";
import CommentFooter from "components/CommentFooter";

export default function Comment() {
  return (
    <div className="comment">
      <div>مرتبط ترین</div>
      <div className="row mt-2">
        <i className="pe-7s-smile smile-icon" />
        <div className="col-10">
          <CommentForm />
        </div>
      </div>
      <CommentsList />
      <CommentFooter />
    </div>
  );
}
