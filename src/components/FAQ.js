import React, { useRef, useState } from "react";
import styles from "./FAQ.module.css";

export default function FAQ(props) {
  const [isActive, setIsActive] = useState(false);
  const ansRef = useRef(null);

  const handleClick = () => {
    setIsActive(!isActive);

    if (ansRef.current.style.maxHeight) {
      ansRef.current.style.maxHeight = null;
      ansRef.current.style.padding = "0 15px";
    } else {
      ansRef.current.style.maxHeight = ansRef.current.scrollHeight + 30 + "px";
      ansRef.current.style.padding = "15px";
    }
  };
  return (
    <>
      <button
        className={`${isActive ? styles.active : ""} ${styles.accordion}`}
        onClick={handleClick}
      >
        {props.ques}
      </button>

      <div ref={ansRef} className={`${styles.panel}`}>
        <p className={`${styles.text}`}>{props.ans}</p>
      </div>
    </>
  );
}
