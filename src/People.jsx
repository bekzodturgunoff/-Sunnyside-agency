import React from "react";

const human = (props) => {
  console.log(props);
};

export default function People(props) {
  return (
    <div className="People">
      <img className="people-face" src={props.img} />
      <p className="description">{props.description}</p>
      <h3 className="username">{props.username}</h3>
      <p className="role">{props.role}</p>
    </div>
  );
}
