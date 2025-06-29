import { DATA } from "@/data";
import { ExperienceCard } from "./ExpereinceCard";

export const Experience = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mr-2">Experience</h1>
      <div>
        {DATA.experiences.map((experience, index) => (
          <ExperienceCard key={`exp-${index}`}>
            <ExperienceCard.Header
              location={experience.location}
              logo={experience.logo}
              startDate={experience.startDate}
              endDate={experience.endDate}
            >
              {experience.title}
            </ExperienceCard.Header>
            <ExperienceCard.Content bullets={experience.bullets} />
            <ExperienceCard.Skills
              skills={experience.skills}
              tagIndex={experience.tagIndex}
            />
          </ExperienceCard>
        ))}
      </div>
    </div>
  );
};
