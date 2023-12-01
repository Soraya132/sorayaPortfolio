import { Title } from "../index";
import { BiSolidRightArrow } from "react-icons/bi";
import {experienceContent } from "@/data";

const Experience = () => {
  return (
    <div>
      <Title
        text="Professional Experience"
        fontSize="text-2xl"
        fontWeight="font-[400]"
      />
      <div >
        <h2 className="text-lg">
          {experienceContent.position} | {experienceContent.company}
        </h2>
        <p className="text-white/70  border-b border-dashed w-max mb-3">
          {experienceContent.location} | {experienceContent.startDate} -{" "}
          {experienceContent.endDate}
        </p>
        <p className="p text-white/70">{experienceContent.summary}</p>
        <ul className="py-2">
          {experienceContent.highlights.map((highlight, index) => {
            return (
              <li
                key={index + highlight}
                className="py-1 flex items-start gap-3"
              >
                <span>
                  <BiSolidRightArrow className="text-accent inline" />
                </span>
                <div>
                  <h1 className="text-white/90 text-md">
                    {highlight.name} :{" "}
                    <span className="text-[14px] text-white/60">{highlight.explanation}</span>{" "}
                  </h1>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
