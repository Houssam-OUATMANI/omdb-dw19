import React from "react";
import styles from "./Button.module.css";
function Button(props) {
  return <button className={styles.container} type={props.type}>{props.content}</button>;
}

export default Button;
