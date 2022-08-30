import React from "react";
import PropTypes from "prop-types";
import "./canvas.scss";

const Canvas = ({ id, draw, height, width }) => {
  const canvas = React.useRef();

  React.useEffect(() => {
    const ctx = canvas.current.getContext("2d");

    draw(ctx, height, width);
  });

  return <canvas id={id} ref={canvas} />;
};

Canvas.propTypes = {
  id: PropTypes.func.isRequired,
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

export default Canvas;
