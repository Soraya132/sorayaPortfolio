import Link from "next/link";
import { RiYoutubeLine, RiLinkedinLine, RiGithubLine } from "react-icons/ri";
const SocialInfo =[
  {link:"https://www.youtube.com/channel/UCwkHT8_iyF7ZlQJcPRNTV3g",icon:<RiYoutubeLine />},
  {link:"https://www.linkedin.com/in/soraya-haidary-11447921a/",icon:<RiLinkedinLine />},
  {link:"https://github.com/Soraya132",icon:<RiGithubLine />}
]
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl  2xl:text-4xl ">
      {SocialInfo.map(
        (item, index) => {
          return (
            <Link
              href={item.link}
              key={index}
              target="_blank"
              className="hover:text-accent transition-all duration-300"
            >
              {item.icon}
            </Link>
          );
        }
      )}
    </div>
  );
};

export default Socials;
