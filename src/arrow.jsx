import Lottie from "lottie-react";
import Scroll_icon_white from "./scroll-down.json";  // adjust path if needed

export default function ScrollArrow() {
  return (
    <div style={{ width: 30, height: 70 }}>
      <Lottie animationData={Scroll_icon_white} loop={true} />
    </div>
  );
}