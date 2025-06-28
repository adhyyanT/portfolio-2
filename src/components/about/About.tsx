import { DATA } from "@/data";

export const About = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div>{DATA.about}</div>
    </div>
  );
};
