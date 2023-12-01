import { fadeIn } from "@/variants";
import { Circles, Title, AppWrap, ServicesSwiper } from "@/components";
import { MotionDiv, MotionP } from "@/components/MotionDiv";
const Services = () => {
  return (
    <div>
      <Circles />
      <div className="relative z-20 flex flex-col xl:flex-row gap-8">
        <div>
          <Title text="My Services" fontSize="text-4xl" fontWeight="font-[500]"/>
          <MotionP
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="p"
          >
            As a seasoned MERN web developer with expertise in Vue.js and deep
            understanding of modern web technologies, I offer a range of
            services tailored to meet your digital needs. Here's how I can
            contribute to your projects.
          </MotionP>
        </div>
        <MotionDiv
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="w-full xl:w-[70%]"
        >
          <ServicesSwiper />
        </MotionDiv>
      </div>
    </div>
  );
};
export default AppWrap(Services);
