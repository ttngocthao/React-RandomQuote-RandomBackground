import React from "react";
function Quote(props) {
  let quoteStyle = {
    backgroundColor: "white",
    width: "60%",
    margin: "1rem auto",
    padding: "1rem",
    height: "120px",
    position: "relative",
    borderRadius: "10px"
  };
  return (
    <div style={quoteStyle}>
      <div id="text">{props.quote}</div>
      <div id="author">_{props.author}_</div>
    </div>
  );
}

export default Quote;
