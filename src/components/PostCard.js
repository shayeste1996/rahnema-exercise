import React from "react";
import Comment from "./Comment";
import { connect } from "react-redux";

import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const PostCard = ({newPost}) => {
  return (
    <div className="col-12 post-card">
      <div className="post-card__container">
        <div className="row px-1">
          <div className="post-card__image">
            <img src="/assets/images/profile1.jpg" alt="profile" />
          </div>
          <div className="col-10 post-card__title">
            <div className="row flex-wrap">
              <div className="col-12 username">shayeste</div>
              <div className="col-12 date">
                3 ژوین، ساعت 01:16<i className="pe-7s-world"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row post-card__content">
          <div>
           {newPost}
          </div>
          <div className="tag">#React</div>
          <div className="tag">#React</div>
          <div className="tag">#React</div>
        </div>
        <div className="post-image">
          <img alt="" src="/assets/images/post-image.jpg" />
          <div className="post-link">
            <div className="post-link__address">fifa.com</div>
            <div className="post-link__description">
              React Native Expo: Creando un TripAdvisor de Restaurantes
            </div>
          </div>
        </div>
        <div className="likes-rate">1.2 هزار</div>
        <div className="row comment-area">
          <div className="col-4">
            <i className="pe-7s-like2"></i> پسند
          </div>
          <div className="col-4">
            {" "}
            <i className="pe-7s-comment"></i>نظر
          </div>
          <div className="col-4">
            <i className="pe-7s-share"></i>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a href="#g"
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                اشتراک گذاری <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
      <Comment />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    newPost: state.newPost,
  };
};
export default connect(mapStateToProps)(PostCard);
