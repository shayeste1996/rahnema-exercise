import React, { Fragment } from "react";
import PostHeader from "components/PostHeader";
import PostBody from "components/PostBody";
import PostFooter from "components/PostFooter";
import Comment from "containers/Comment";

import { connect } from "react-redux";

function Post({ posts }) {
  return (
    <Fragment>
      {posts.length > 0
        ? posts.map((post) => {
            return (
              <div className="col-12 post-card" key={post.id}>
                <div className="post-card__container">
                  <PostHeader username="shayeste" time={post.time} />
                  <PostBody post={post} />
                  <PostFooter />
                  <Comment />
                </div>
              </div>
            );
          })
        : null}
    </Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps)(Post);
