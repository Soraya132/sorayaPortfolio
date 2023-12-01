"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Keyboard, Scrollbar, Pagination } from "swiper/modules";
// icons
import { RxArrowRight } from "react-icons/rx";
import {
  FaCode,
  FaDesktop,
  FaDatabase,
  FaServer,
  FaChartLine,
  FaQuestion,
} from "react-icons/fa";
// data
const servicesData = [
  {
    icon: <FaCode />,
    title: "Full-Stack Development",
    description:
      "Crafting robust server-side applications with the MERN stack.",
  },
  {
    icon: <FaDesktop />,
    title: "Responsive Frontend Design",
    description:
      "Creating visually appealing and user-friendly interfaces across devices.",
  },
  {
    icon: <FaDatabase />,
    title: "Custom Web Applications",
    description:
      "Building tailor-made solutions for unique business requirements.",
  },
  {
    icon: <FaServer />,
    title: "API Development and Integration",
    description:
      "Build and integrate RESTful APIs for seamless data communication.",
  },
  {
    icon: <FaChartLine />,
    title: "Performance Optimization",
    description:
      "Identify and address bottlenecks in your application for enhanced performance.",
  },
  {
    icon: <FaQuestion />,
    title: "Consultation and Support",
    description:
      "Receive expert advice on technology choices, architecture decisions, and best practices.",
  },
];
const ServicesSwiper = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        spaceBetween={20}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          900: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
          1200: {
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
        {servicesData.map((service, index) => {
          return (
            <SwiperSlide key={index + 1}>
              <div className="bg-[rgba(65,47,123,0.3)] h-full rounded-lg px-6 py-8 flex flex-col gap-x-6 group ">
                {/* icon */}
                <div className="text-4xl text-accent mb-4">{service.icon}</div>
                {/* title and description */}
                <div className="mb-8">
                  <div className="mb-2 text-lg">{service.title}</div>
                  <p className="max-w-[350px] leading-normal">
                    {service.description}
                  </p>
                </div>
                {/* arrow */}
                <div className="text-xl">
                  <RxArrowRight className="group-hover:-rotate-45 group-hover:text-accent duration-300" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default ServicesSwiper;
