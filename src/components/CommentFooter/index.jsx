import React from "react";

export default function CommentFooter() {
  return (
    <div className="row justify-content-between comment__footer">
      <div className="col-6">
        <span className="show-coments"> دیدن سایر نظرها</span>
      </div>
      <div className="col-3 pages">
        <span>2 از 203</span>
      </div>
    </div>
  );
}
