"use client";
import Image from "next/image";

interface HomeCardProps {
  icon: string;
  title: string;
  color: string;
  description: string;
  handleClick: () => void;
}

const HomeCard = ({
  icon,
  title,
  color,
  description,
  handleClick,
}: HomeCardProps) => {
  return (
    <div
      className={`${color} px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px]
      min-h-[260px] rounded-[14px] cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={icon} alt="meeting-icon" width={27} height={27} />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
