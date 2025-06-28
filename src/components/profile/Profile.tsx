import classNames from "classnames";
import styles from "./profile.module.css";
import { Button } from "../ui/button/Button";

export const Profile = () => {
  return (
    <div className="max-w-[500px]">
      <div
        className={classNames(
          "w-[150px] h-[150px] rounded-full mb-4",
          styles.avatar
        )}
      >
        photo
      </div>
      <div className=" text-4xl font-bold mb-2">Adhyyan Tripathi</div>
      <div className={classNames(styles.roleFont, "text-xl mb-4")}>
        Full-Stack Developer
      </div>
      <div className={classNames("text-xl mb-4", styles.roleFont)}>
        (icon) Mumbai, Maharashtra, India (flag)
      </div>
      <div className={classNames("mb-4", styles.roleFont)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nihil
        soluta
      </div>
      <div className="flex items-center">
        <div>
          <Button>Resume</Button>
        </div>
        <div className="ml-4">other social links</div>
      </div>
    </div>
  );
};
