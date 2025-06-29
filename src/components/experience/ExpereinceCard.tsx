import classNames from "classnames";
import styles from "./experience.module.css";
import { Tag } from "../tag/Tag";
import React from "react";

export type ExperienceCardProps = {};

const skills = ["Javascript", "React"];

const ExperienceCard = ({
  children,
}: React.PropsWithChildren<ExperienceCardProps>) => {
  let header: React.ReactNode = null,
    content: React.ReactNode = null,
    skills: React.ReactNode = null;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;

    if (child.type === Header) {
      header = child;
    } else if (child.type === Content) {
      content = child;
    } else if (child.type === Skills) {
      skills = child;
    }
  });

  return (
    <div className="ml-4 mt-8">
      <div className="flex items-center gap-4 mb-2">{header}</div>
      <ul className="muted-font">{content}</ul>
      <div className="mt-4">{skills}</div>
    </div>
  );
};

type HeaderProps = {
  location: string;
  startDate: string;
  logo: string;
  children: React.ReactNode;
  endDate?: string;
};

const Header = ({
  location,
  startDate,
  endDate,
  logo,
  children,
}: HeaderProps) => {
  return (
    <>
      <div
        className={classNames(
          "w-24 h-24 rounded-full min-w-24",
          styles.companyLogo
        )}
      >
        {logo}
      </div>
      <div>
        <div className="text-2xl font-semibold">{children}</div>
        <div className="text-xl muted-font">{location}</div>
        <div className="muted-font">
          {startDate} - {endDate ?? "Present"} (1 year and 11 months)
          {/* TODO: Get the count of year and month from start and end dates */}
        </div>
      </div>
    </>
  );
};

const Content = ({ bullets }: { bullets: string[] }) => {
  return (
    <>
      {bullets.map((bullet, index) => (
        <li className="flex items-start mb-2" key={`exp-content-${index}`}>
          <span className="mr-2">•</span>
          <span>{bullet}</span>
        </li>
      ))}
    </>
  );
};

const Skills = ({
  skills,
  tagIndex,
}: {
  skills: string[];
  tagIndex: number;
}) => {
  return (
    <>
      {skills.map((skill, index) => (
        <Tag key={`exp-skills-${index}`} tagIndex={tagIndex + 1}>
          {skill}
        </Tag>
      ))}
    </>
  );
};
ExperienceCard.Header = Header;
ExperienceCard.Content = Content;
ExperienceCard.Skills = Skills;

export { ExperienceCard };
