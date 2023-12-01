import { fadeIn } from "@/variants";
import { ParticlesContainer, ProjectsBtn } from "@/components";
import { MotionDiv } from "@/components/MotionDiv";
import TypingContainer from "@/components/common/TypingContainer";
function Home() {
  return (
    <div className="flex flex-col w-full h-screen lg:mt-5 pb-40 mb-40 overflow-y-scroll no-scrollbar ">
      <div className="w-full pb-[100px] md:pb-10 h-full ">
        {/* text */}
        <div className="w-full h-full  bg-gradient-to-r from-primary-10 via-black/70 to-black/30 relative z-20">
          <MotionDiv
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            className="flex flex-col h-full gap-6 items-center text-center justify-center pt-10"
          >
            {/* title */}
            <h1 className="h1 mb-0 2xl:text-5xl ">
              Soraya<span className="text-accent"> Haidary</span>
            </h1>
            {/* subtitle */}
            <h4 className="text-white texl-lg sm:text-3xl 2xl:text-4xl">
              <TypingContainer/>
            </h4>
            {/* btn */}
            <div className="flex">
              <ProjectsBtn />
            </div>
          </MotionDiv>
        </div>
        {/* image */}
        <div className="w-screen h-full absolute right-0 bottom-0 mix-blend-color-dodge">
          <div className="bg-explosion bg-cover bg-no-repeat w-full h-full absolute translate-z-0">
            <ParticlesContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
