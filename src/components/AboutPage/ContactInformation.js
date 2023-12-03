import { ContactInfo } from "@/data";
import Link from "next/link";
const ContactInformation = () => {
  return (
    <section>
      <div className="grid gap-3 w-full">
        {ContactInfo.map((item, index) => {
          return (
            <Link
              href={item.page}
              target={item.page === '' ? '' : '_blank'}
              className="about__get__in_touch border-b border-dashed border-accent hover:border-white/60 pb-1"
              key={index + item.info}
            >
              <div>{item.icon}</div>
              <span className="text-lg lg:text-sm hover:duration-500 2xl:text-xl hover:text-accent">
                {item.info}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default ContactInformation;
