import React from "react";
const reaction = [
  { id: 1, text: "پسند" },
  { id: 2, text: "پاسخ" },
  { id: 3, text: "دیدن ترجمه" },
  { id: 4, text: "1 هفته" },
];
export default function Comment() {
  return (
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
            {reaction.map((item) => {
              return (
                <li key={item.id}>
                  <span className="divider">&nbsp;·&nbsp;</span>
                  <span>{item.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
