import { DATA } from "@/data";
import { ExperienceCard } from "../experience/ExpereinceCard";

export const Education = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mr-2">Education</h1>
      <div>
        {DATA.educations.map((edu, index) => (
          <ExperienceCard key={`edu-${index}`}>
            <ExperienceCard.Header
              location={edu.college}
              logo={edu.logo}
              startDate={edu.startDate}
              endDate={edu.endDate}
            >
              {edu.title}
            </ExperienceCard.Header>
          </ExperienceCard>
        ))}
      </div>
    </div>
  );
};
