import classNames from "classnames";
import { Code, File, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button/Button";
import styles from "./profile.module.css";
import { ButtonType } from "@/types";
import { DATA } from "@/data";

export const Profile = () => {
  return (
    <div className="max-w-[500px]">
      <div
        className={classNames(
          "w-[150px] h-[150px] rounded-full mb-4",
          styles.avatar
        )}
      >
        <Image
          className="rounded-full"
          src="https://4ep09v5dco.ufs.sh/f/ObbFGHI3vFYcRyBUEmjnbTu8tWKqeQxBhfr6LsP5EVmiw7YR"
          width={150}
          height={150}
          alt="image"
        />
      </div>
      <div className=" text-4xl font-bold mb-2">Adhyyan Tripathi</div>
      <div className={classNames(styles.roleFont, "text-xl mb-4")}>
        {DATA.profile.title}
      </div>
      <div className={classNames("text-xl mb-4", styles.roleFont)}>
        {DATA.profile.location}
      </div>
      <div className={classNames("mb-4", styles.roleFont)}>
        {DATA.profile.subtitle}
      </div>
      <div className="flex items-center gap-16 w-full">
        <div>
          <Button buttonType={ButtonType.ResumeDownload}>
            <File /> Resume
          </Button>
        </div>
        <div className="flex gap-4">
          <Button
            buttonType={ButtonType.Link}
            link="https://www.linkedin.com/in/adhyyan-tripathi/"
          >
            <Linkedin size={36} />
          </Button>
          <Button
            buttonType={ButtonType.Link}
            link="mailto:adhyyan.tripathi@outlook.com"
          >
            <Mail size={36} />
          </Button>
          <Button
            link="https://leetcode.com/u/Droid232/"
            buttonType={ButtonType.Link}
          >
            <Code size={36} />
          </Button>
        </div>
      </div>
    </div>
  );
};
