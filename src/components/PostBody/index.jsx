import React from "react";

export default function PostBody({ post }) {
  return (
    <div>
      <div className="row post-card__content">
        <div>{post.text}</div>
        <div className="tag">#React</div>
        <div className="tag">#React</div>
        <div className="tag">#React</div>
      </div>
      <div className="post-image">
        <img alt="" src={post.image} />
        <div className="post-link">
          <div className="post-link__address">fifa.com</div>
          <div className="post-link__description">
            React Native Expo: Creando un TripAdvisor de Restaurantes
          </div>
        </div>
      </div>
    </div>
  );
}
