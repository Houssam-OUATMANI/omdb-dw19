import React, { useContext } from "react";
import FormContext from "../../context/formContext";
import styles from "./Form.module.css";

function Form(props) {
  const { toggle, setToggle } = useContext(FormContext);

  return (
    <form onSubmit={props.onSubmit} className={styles.container}>
      <p onClick={() => setToggle(!toggle)}>
        {toggle ? "Click to hide the form" : "Click to show the form"}
      </p>
      {toggle && [props.children]}
    </form>
  );
}

export default Form;
