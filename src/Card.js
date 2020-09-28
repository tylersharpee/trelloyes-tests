import React from "react";
import store from './store';

function Card(props) {
  return (
    <div class="Card">
      <button type="button">delete</button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default Card;
