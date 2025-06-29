import classNames from "classnames";
import styles from "./tag.module.css";

export const Tag = ({
  children,
  tagIndex,
}: {
  children: React.ReactNode;
  tagIndex: number;
}) => {
  return (
    <span
      className={classNames(
        styles.tag,
        "rounded-full px-3 py-1.5  mr-2 mb-2",
        styles[`tag${tagIndex}`]
      )}
    >
      {children}
    </span>
  );
};
