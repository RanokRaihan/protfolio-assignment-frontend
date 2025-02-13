import clsx from "clsx";
import Image from "next/image";

interface skillProps {
  skill: string;
  icon: string;
  backgroundColor?: string;
}

const SkillCard = ({ skillData }: { skillData: skillProps }) => {
  const { skill, icon, backgroundColor } = skillData;
  return (
    <div className=" w-1/3 lg:w-1/4 p-6 lg:p-2  flex flex-col items-center my-3 gap-2">
      <Image
        src={icon}
        width={100}
        height={100}
        alt={skill}
        className={clsx(
          "rounded-md p-2 bg-slate-100",
          backgroundColor && backgroundColor
        )}
      />
      <p className="text-center">{skill}</p>
    </div>
  );
};

export default SkillCard;
