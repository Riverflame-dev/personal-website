import "./styles.scss";
import AddShadow from "./AddShadow";

export default function Text3D() {
  return (
    <div className="text3d-container">
      <AddShadow />
      <div id="text" data-text="Welcome to my website.">
        Welcome to my website.
      </div>
    </div>
  );
}
