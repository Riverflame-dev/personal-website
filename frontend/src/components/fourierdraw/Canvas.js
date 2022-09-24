import React from "react";
import PropTypes from "prop-types";

const Canvas = ({ id, draw, height, width, lineWidth, enlarge, cx, cy }) => {
  const canvas = React.useRef();

  React.useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    draw(ctx, height, width, lineWidth, enlarge, cx, cy);
  });

  return <canvas id={id} ref={canvas} />;
};

Canvas.propTypes = {
  id: PropTypes.func.isRequired,
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  lineWidth: PropTypes.number.isRequired
};

export default Canvas;
