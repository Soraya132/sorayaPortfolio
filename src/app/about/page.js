"use client"
import React, { useState } from "react";
import { downloadableLink } from "@/data";
import {
  Circles,
  Title,
  ContactInformation,
  AppWrap,
  Modal,
  Experience,
  AboutMe,
  ProgrammingSkills,
  WebTechnologies,
  TypeAnime,
  Certificates,
} from "@/components";
import { fadeIn } from "@/variants";
import Image from "next/image";
import TypingContainer from "@/components/common/TypingContainer";
import { MotionDiv } from "@/components/MotionDiv";

const About = () => {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <section className="grid lg:grid-cols-2 lg:gap-20 gap-5  text-gray">
      <Circles />
      <MotionDiv
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        className="about__image h-[400px] lg:h-full"
      ></MotionDiv>
      <div>
        <MotionDiv
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
        >
          <Title
            text="soraya haidary"
            fontSize="text-4xl"
            fontWeight="font-[500]"
          >
            <h4 className="text-gray py-1 text-xl text-white/50">
              <TypingContainer />
            </h4>
          </Title>
          <p className="py-1 p text-white/80">
            Greetings! I'm <span className="text-accent">Soraya</span>, a
            passionate MERN stack developer with expertise in Vue.js . My
            journey in the world of web development began with a curiosity to
            bring ideas to life through code.
          </p>
          <button
            className="button"
            onClick={() => setShowProfile(!showProfile)}
          >
            learn more
          </button>
        </MotionDiv>
        <Modal setShowModal={setShowProfile} showModal={showProfile}>
          <div className="about__modal_base-container">
            <div className="flex flex-col py-10 lg:py-5 items-center px-2 sm:px-8 gap-5 mb-1 ">
              <div>
                <div className="lg:w-20 lg:h-20 w-52 h-52 rounded-full mx-auto">
                  <Image
                    src="/thumb1.jpg"
                    alt="profile photo"
                    width={200}
                    height={200}
                    className="w-full rounded-full h-full object-fill"
                  />
                </div>
                <div>
                  <h2 className="text-2xl 2xl:text-4xl py-2 text-center">
                    soraya <span>haidary</span>
                  </h2>
                  <h4 className="pb-2 text-center text-accent">
                    <TypeAnime />
                  </h4>
                </div>
              </div>
              <div className="w-full">
                <ContactInformation />
              </div>
              <div className="w-[90%] my-1 ">
                <a href={downloadableLink} download className="button w-full">
                  Download CV
                </a>
              </div>
            </div>
            <div className="about__modal-container2">
              <AboutMe />
              <ProgrammingSkills />
              <WebTechnologies />
              <Experience />
              <Certificates />
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};
export default AppWrap(About);
