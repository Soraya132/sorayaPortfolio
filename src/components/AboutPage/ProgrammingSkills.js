import Title from "../common/Title";
import { skills } from "@/data";
import { BiSolidRightArrow } from "react-icons/bi";

const programmingSkills = () => {
  return (
    <div>
      <Title
        text="Programming Skills"
        fontSize="text-2xl"
        fontWeight="font-[400]"
      />
      <ul className="py-1">
        {skills.map((skill, index) => {
          return (
            <li key={index + skill} className="py-1 flex items-start gap-3">
              <span>
                <BiSolidRightArrow className="text-accent inline" />
              </span>
              <div>
                <h1 className="text-white text-xl">
                  {skill.name} :{" "}
                  <span className="text-[16px] text-white/60">
                    {skill.description}
                  </span>{" "}
                </h1>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default programmingSkills;
