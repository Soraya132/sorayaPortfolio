import { ContactInfo } from "@/data";;
import { Circles, Title, AppWrap } from "@/components";
import { fadeIn } from "@/variants";
import Link from "next/link";
import ContactForm from "@/components/ContactPage/ContactForm";
import { MotionDiv } from "@/components/MotionDiv";
const Contact = () => {
  return (
    <div className="grid">
      <Circles />
      <Title text="Let's connect" fontSize="text-4xl" fontWeight="font-[500]" />
      <section className="grid lg:grid-cols-2 mt-10 lg:gap-10 gap-5 relative z-20">
        <MotionDiv
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          className="grid gap-5"
        >
          {ContactInfo.map((item, index) => {
            return (
              <Link
                href={item.page}
                className="get__in_touch group"
                target="_blank"
                key={index + item.info}
              >
                <div className="text-accent">{item.icon}</div>
                <span className="text-white group-hover:text-accent duration-500">
                  {item.info}
                </span>
              </Link>
            );
          })}
        </MotionDiv>
        <MotionDiv
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
        >
          <ContactForm/>
        </MotionDiv>
      </section>
    </div>
  );
};
export default AppWrap(Contact);
