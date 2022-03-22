import React from "react";

export default function BuyType(props) {
  return (
    <div>
      <div class="buy-type">
        <img src={props.src} alt="Myself Icon" title="Icon" />
        <span data-value="1A">{props.title}</span>
      </div>
    </div>
  );
}
