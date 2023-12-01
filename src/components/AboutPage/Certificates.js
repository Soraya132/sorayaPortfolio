import Title from "../common/Title";
import { certificates } from "@/data";
import { BiSolidRightArrow } from "react-icons/bi";

const Certificates= () => {
  return (
    <div>
      <Title text="Certificates" fontSize="text-2xl" fontWeight="font-[400]" />
      <ul className="py-1">
        {certificates.map((certificate, index) => {
          return (
            <li
              key={index + certificate.name}
              className="py-1 flex items-start gap-3"
            >
              <span>
                <BiSolidRightArrow className="text-accent inline" />
              </span>
              <a
                href={certificate.link}
                target="_blank"
                rel="noref"
                className="hover:scale-105 underline pb-1 duration-500 text-white/60 p"
              >
                {certificate.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Certificates;
