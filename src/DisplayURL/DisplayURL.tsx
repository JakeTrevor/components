import { useState, useEffect } from "react";

import styles from "./DisplayURL.module.css";

let Decorator = (Story: any) => {
  let [location, setLocation] = useState(window.location.toString());

  let update_location = async () => {
    setLocation(window.location.toString());
    setTimeout(update_location, 50);
  };

  useEffect(() => {
    update_location();
  }, []);

  return (
    <>
      <div className={styles.root}>
        <h3>Current URL:</h3>
        <p className={styles.urlContainer}>{location}</p>
      </div>
      <Story />
    </>
  );
};

export default Decorator;
