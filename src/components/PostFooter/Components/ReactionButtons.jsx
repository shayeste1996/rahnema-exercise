import React from "react";

export default function ReactionButtons() {
  return (
    <div className="reaction-buttons">
      <div className="container">
        <div id="like" className="circle">
          <p>Like</p>
          <img alt="" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e4299734559659.56d57de04bda4.gif" />
        </div>
        <div id="love" className="circle">
          <p>Love</p>
          <img alt="" src="https://ya-webdesign.com/images/facebook-reaction-buttons-png-12.gif" />
        </div>
        <div id="haha" className="circle">
          <p>Haha</p>
          <img alt="" src="https://s3.amazonaws.com/td.teamdigital/assets/images/case-studies/carnival-choosefun-2018/reaction-ha.gif" />
        </div>
        <div id="wow" className="circle">
          <p>Wow</p>
          <img alt="" src="http://jwtdigitalpr.com/images/Wow.gif" />
        </div>
        <div id="sad" className="circle">
          <p>Sad</p>
          <img alt="" src="http://jwtdigitalpr.com/images/Sad.gif" />
        </div>
        <div id="angry" className="circle">
          <p>Angry</p>
          <img alt="" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e66e6e34559659.56d57de095aee.gif" />
        </div>
      </div>
    </div>
  );
}
