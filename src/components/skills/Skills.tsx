import classNames from "classnames";
import styles from "./skills.module.css";

export const Skills = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Skills</h1>
      <div>
        <span
          className={classNames(
            styles.tag,
            "rounded-full px-3 py-1.5",
            styles.tag1
          )}
        >
          Typescript
        </span>
      </div>
    </div>
  );
};
