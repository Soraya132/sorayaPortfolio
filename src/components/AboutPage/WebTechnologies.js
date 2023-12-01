import Title from "../common/Title";
import { frameworks } from "@/data";
import { BiSolidRightArrow } from "react-icons/bi";

const WebTechnologies = () => {
  return (
    <div>
      <Title
        text="Web Technologies"
        fontSize="text-2xl"
        fontWeight="font-[400]"
      />
      <ul className="py-1">
        {frameworks.map((framework, index) => {
          return (
            <li
              key={index + framework}
              className="py-1 flex items-center gap-3"
            >
              <span>
                <BiSolidRightArrow className="text-accent" />
              </span>
              <span>{framework}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default WebTechnologies;
