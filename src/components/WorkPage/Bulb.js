import Image from "next/image";
const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 animate-pulse color-mix-blend-color-dodge duration-75 z-10 xl:w-[260px]">
      <Image
        src={"/bulb.png"}
        width={260}
        height={200}
        className="h-full w-full"
        alt="bulb"
      />
    </div>
  );
};

export default Bulb;
