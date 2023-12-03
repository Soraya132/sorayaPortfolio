"use Client";
import { TypeAnimation } from "react-type-animation";
const TypeAnime = () => {
  return (
    <div>
      <span className="text-white">Creative </span>{" "}
      <TypeAnimation
        sequence={["Freelancer", "Web Developer"]}
        wrapper="span"
        speed={0}
        style={{ display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
};
export default TypeAnime;
