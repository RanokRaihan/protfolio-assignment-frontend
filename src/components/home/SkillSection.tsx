import Image from "next/image";
import SkillContainer from "./SkillContainer";

const SkillSection = () => {
  return (
    <section>
      <div className="container mx-auto p-4 text-center space-y-6">
        <h2 className="mb-4">
          <span className="main-heading border-b border-primary pb-2">
            My Skills
          </span>
        </h2>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <SkillContainer />
          <div className="lg:w-1/2 w-full flex justify-center items-center mt-4 lg:mt-0">
            <Image
              src="/assets/images/skill-graphic.svg"
              width={500}
              height={500}
              alt="My Skills"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
