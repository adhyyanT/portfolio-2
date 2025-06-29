import { DATA } from "@/data";
import { Tag } from "../tag/Tag";

export const SkillsCard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 mr-2">Skills</h1>
      <div>
        {DATA.skillSections.map((section, index) => (
          <div className="mb-6" key={index}>
            <h4 className="text-xl font-semibold mb-2 text-gray-200 capitalize">
              {section.title}
            </h4>
            <div className="mt-3 flex flex-wrap">
              {section.skills.map((skill, skillIndex) => (
                <Tag key={`${index} - ${skillIndex}`} tagIndex={index + 1}>
                  {skill}
                </Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
