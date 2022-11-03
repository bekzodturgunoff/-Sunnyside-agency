import React from "react";

export default function People(props) {
  return (
    <div className="people">
      <img className="people-face" src={props.img} />
      <p className="description">{props.description}</p>
      <div className="name">
        <h3 className="username">{props.username}</h3>
        <p className="role">{props.role}</p>
      </div>
    </div>
  );
}
