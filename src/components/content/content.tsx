import { About } from "../about/About";
import { Education } from "../education/Education";
import { Experience } from "../experience/Experience";
import { SkillsCard } from "../skills/SkillsCard";

export const Content = () => {
  return (
    <div className="flex flex-col gap-[2rem]">
      <div>
        <About />
      </div>
      <div>
        <SkillsCard />
      </div>
      <div className="experience">
        <Experience />
      </div>
      <div>
        <Education />
      </div>
    </div>
  );
};
