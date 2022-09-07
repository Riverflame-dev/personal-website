import React from "react";

export default function AddShadow() {
  var shadow = "";
  for (var i = 0; i < 20; i++) {
    shadow += (shadow ? "," : "") + -i * 1 + "px " + i * 1 + "px 0 #6FEDD6";
  }
  React.useEffect(() => {
    document.getElementById("text").style.textShadow = shadow;
  });
  return <br />;
}
