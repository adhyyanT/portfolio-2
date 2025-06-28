import { About } from "../about/About";
import { Skills } from "../skills/Skills";

export const Content = () => {
  return (
    <div className="flex flex-col gap-[2rem]">
      <div>
        <About />
      </div>
      <div>
        <Skills />
      </div>
    </div>
  );
};
