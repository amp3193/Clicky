import * as React from "react";

function ImgCard(props) {
    console.log(props.image)
  return (
    <div className="card">
        <img
          src={props.image}
          alt=""
          onClick={() => props.click(props.id)}
        />
      </div>
  );
}

export default ImgCard;
