import { FC } from "react";

import Folder from "../assets/folder.svg";
import File from "../assets/file.svg";

import styles from "./FileList.module.css";

export interface fileListProps {
  data: Directory;
  update: (newDir: string) => void;
}

let FileList: FC<fileListProps> = ({ data, update }) => {
  let keys = Object.keys(data)
    .sort()
    .sort((a, b) => {
      let valA = typeof data[a] === typeof "" ? 0 : 1;
      let valB = typeof data[b] === typeof "" ? 0 : 1;
      return valB - valA;
    });

  return (
    <ul className={styles.list}>
      {keys.map((each) => {
        let icon = <Folder className={styles.svg} />;
        if (typeof data[each] == typeof "") {
          icon = <File className={styles.svg} />;
        }

        return (
          <li key={each} className={styles.item}>
            <button
              onClick={() => {
                update(each);
              }}
              className={styles.fileButton}
            >
              {icon}
              <h3>{each}</h3>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FileList;
