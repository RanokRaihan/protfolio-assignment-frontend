import { skills } from "@/constants";
import SkillCard from "./SkillCard";

const SkillContainer = () => {
  return (
    <div className="flex flex-wrap justify-center lg:w-1/2 ">
      {skills.map((skill) => (
        <SkillCard key={skill.skill} skillData={skill} />
      ))}
    </div>
  );
};

export default SkillContainer;
