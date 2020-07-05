import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ReactionButtons from "./Components/ReactionButtons";
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

export default function PostFooter() {
  return (
    <div>
      <div className="likes-rate">1.2 هزار</div>
      <div className="row comment-area">
        
             
           
        <div className="col-4 comment-area__button show-reactions">
           <ReactionButtons />
          <i className="pe-7s-like2"></i> پسند
        </div>
        <div className="col-4 comment-area__button ">
          <i className="pe-7s-comment"></i>نظر
        </div>
        <div className="col-4 comment-area__button">
          <i className="pe-7s-share"></i>
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              href="#g"
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              اشتراک گذاری <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
