import { fadeIn } from "@/variants";
import { MotionDiv } from "../MotionDiv";
const Title = ({ text, children, fontSize, fontWeight }) => {
  text = text.split(" ");
  return (
    <MotionDiv
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      animate="show"
      className="pb-4 border-b border-white/20 border-dashed mb-5"
    >
      <h2 className={`${fontSize} ${fontWeight}`}>
        {text.map((item, index) => {
          return (
            <span
              key={index + item}
              className={`${index % 2 == 0 ? "text-white" : "text-accent"}`}
            >
              {" "}
              {item}
            </span>
          );
        })}
        <span className="text-accent text-5xl">.</span>
      </h2>
      {children}
    </MotionDiv>
  );
};
export default Title;
