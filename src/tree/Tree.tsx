import { FC } from "react";

import styles from "./tree.module.css";

interface props {
  tree: TreeLike<String>;
}

let Tree: FC<props> = ({ tree }) => {
  return (
    <div className={styles.node}>
      <p className={styles.name}>{tree.value}</p>
      <div className={styles.children}>
        {tree.children.map((each) => {
          return <Tree tree={each} />;
        })}
      </div>
    </div>
  );
};
export default Tree;
