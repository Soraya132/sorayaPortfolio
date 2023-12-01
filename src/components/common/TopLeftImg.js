import Image from "next/image";
const TopLeftImg = () => {
  return (
    <div className="absolute top-0 left-0 w-[400px] opacity-20 mix-blend-color-dodge ">
      <Image
        src="/top-left-img.png"
        width={300}
        height={100}
        priority={true}
        alt="top left image of hero section"
        className="h-auto w-auto"
      />
    </div>
  );
};

export default TopLeftImg;
