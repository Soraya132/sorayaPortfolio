"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Circles, Title, AppWrap, Modal, Bulb } from "@/components";
import { fadeIn } from "@/variants";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {images } from "@/data";
// import required modules
import { Keyboard, Scrollbar, Pagination } from "swiper/modules";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    image: "",
    header: "",
    explanation: "",
    githubLink: "",
    siteLink: "",
    frameworks:[]
  });
  const handleClick = (info) => {
    setShowModal(true);
    setData({
      image: info.image,
      header: info.name,
      explanation: info.explanation,
      githubLink: info.githubLink,
      siteLink: info.siteLink,
      frameworks:info.frameworks
    });
  };
  return (
    <div>
      <Title text="Creative Portfolio" fontSize="text-4xl" fontWeight="font-[500]" />
      <Circles />
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        animate="show"
        className=" relative z-20"
      >
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          spaceBetween={40}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            1000: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Pagination]}
          className="mySwiper"
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide
                key={index + image}
                className="rounded-lg h-[250px] overflow-x-hidden overflow-y-hidden group"
                onClick={() => handleClick(image)}
              >
                <div className="w-full h-[250px]">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      backgroundSize: "cover",
                      background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('${image.image}') no-repeat fixed center/cover`,
                    }}
                    className="w-full h-full rounded-lg  flex items-end justify-start pb-16 pl-14 "
                  >
                    <motion.div
                      initial={{ y: 60 }}
                      whileInView={{ y: 0 }}
                      className="hidden group-hover:flex  px-6 py-5 bg-[#1a1e42f3]  rounded-lg "
                    >
                      <h5 className="text-white text-lg p">{image.name}</h5>
                    </motion.div>
                  </motion.div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
      <Modal setShowModal={setShowModal} showModal={showModal}>
        <section className="work__modal-container">
          <Link
            href={data.siteLink}
            target={data.siteLink === '/' ? '' : '_blank'}
            rel="noopener noreferrer"
            className=""
          >
            <Image
              src={data.image}
              alt={data.image}
              width={1000}
              height={1000}
              className=" w-full rounded-2xl hover:scale-105 duration-700  object-top"
            />
          </Link>
          <div className="flex flex-col gap-3 pt-3">
            <h2 className="h2 2xl:text-2xl">{data.header}</h2>
            <div className="flex flex-row flex-wrap gap-2 sm:gap-3">
              {data.frameworks.map((framework, index) => {
                return (
                  <div key={index} className="px-5 py-2 2xl:px-7 2xl:text-lg rounded-2xl bg-primary">
                    {framework}
                  </div>
                );
              })}
            </div>
            <p className="p 2xl:text-lg">{data.explanation}</p>
          </div>
          <div className="text-4xl flex gap-8 py-2">
            <Link
              href={data.siteLink}
              target={data.siteLink === '/' ? '' : '_blank'}
              rel="noopener noreferrer"
              className="hover:text-accent duration-500"
            >
              <FiExternalLink />
            </Link>
            <Link
              href={data.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent duration-500"
            >
              <FaGithub />
            </Link>
          </div>
        </section>
      </Modal>
      <Bulb />
    </div>
  );
};
export default AppWrap(Portfolio);
