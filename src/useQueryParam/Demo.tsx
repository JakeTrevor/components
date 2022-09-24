import { FC } from "react";

import useQueryParam from "./useQueryParam";

import styles from "./Demo.module.css";

let Demo: FC = () => {
  let [state, setState] = useQueryParam("state", "0");

  let val = Number(state);

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => {
          setState(String(val + 1));
        }}
      >
        +
      </button>
      <h1>{val}</h1>
      <button
        className={styles.button}
        onClick={() => {
          setState(String(val - 1));
        }}
      >
        -
      </button>
    </div>
  );
};

export default Demo;
