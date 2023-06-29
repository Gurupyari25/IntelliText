import React, { useState } from "react";
import styles from "./TextFunctionForm.module.css";

export default function TextFunctionForm() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setUndos([...undos, text]);
    setText(event.target.value);
    setRedos([]);
  };

  const clearTxt = () => {
    setUndos([...undos, text]);
    setText("");
    setRedos([]);
  };

  const copyTxt = () => {
    navigator.clipboard.writeText(text);
  };

  const txtToUpCase = () => {
    setUndos([...undos, text]);
    setText(text.toUpperCase());
    setRedos([]);
  };

  const txtToLowCase = () => {
    setUndos([...undos, text]);
    setText(text.toLowerCase());
    setRedos([]);
  };

  const txtToTitleCase = () => {
    setUndos([...undos, text]);
    setText(text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()));
    setRedos([]);
  };

  const txtToSentenceCase = () => {
    setUndos([...undos, text]);

    const sentParts = text.split(/([.?!])(\s+)|\n/);

    const modSent = sentParts.map((sent) => {
      if (sent) {
        return sent.charAt(0).toUpperCase() + sent.slice(1).toLowerCase();
      } else {
        return sent;
      }
    });

    for (let i = 0; i < modSent.length; i++) {
      if (modSent[i] === null || modSent[i] === undefined) {
        modSent[i] = "\n";
      }
    }

    setText(modSent.join(""));

    setRedos([]);
  };

  const rmvXtraSpace = () => {
    setUndos([...undos, text]);
    setText(text.split(/[ ]+/).join(" "));
    setRedos([]);
  };

  const [undos, setUndos] = useState([]);
  const [redos, setRedos] = useState([]);

  const undo = () => {
    if (undos.length > 0) {
      const prevTxt = undos[undos.length - 1];
      setUndos(undos.slice(0, -1));
      setRedos([text, ...redos]);
      setText(prevTxt);
    }
  };

  const redo = () => {
    if (redos.length > 0) {
      const nextTxt = redos[0];
      setRedos(redos.slice(1));
      setUndos([...undos, text]);
      setText(nextTxt);
    }
  };

  const charCount = text.length;

  const wordCount = text
    .split(" ")
    .filter((element) => element.length > 0 && element !== "\n").length;

  const spaceCount = text.split(" ").length - 1;

  const sentCount = text.split(/[.?!|]/).length - 1;

  const paraCount = text
    .split(/\n/)
    .filter((element) => element.length > 0 && element !== "\n").length;

  return (
    <>
      <div className={`${styles.container} ${styles.flex}`}>
        <div className={`${styles.innerContainer} ${styles.flex}`}>
          <h1>
            IntelliText: Streamline Your Workflow, Enhance Your Productivity!
          </h1>

          <div>
            <div className={`${styles.btns} ${styles.flex}`}>
              <button
                className={`${styles.btn}`}
                onClick={clearTxt}
                data-name="Clear All"
              >
                <i className="fa-solid fa-trash"></i>
              </button>

              <button
                className={`${styles.btn}`}
                onClick={copyTxt}
                data-name="Copy Text"
              >
                <i className="fa-regular fa-copy"></i>
              </button>

              <div className={`${styles.btn} ${styles.dropdown}`}>
                <button
                  className={`${styles.dropdownBtn}`}
                  data-name="Change Case"
                >
                  <i className="fa-solid fa-a"></i>
                  <i className="fa-solid fa-arrow-up-long"></i>
                  <i className="fa-solid fa-arrow-down-long"></i>
                </button>

                <div className={`${styles.dropdownContent}`}>
                  {/* eslint-disable-next-line */}
                  <a onClick={txtToLowCase}>lower case</a>
                  {/* eslint-disable-next-line */}
                  <a onClick={txtToUpCase}>UPPER CASE</a>
                  {/* eslint-disable-next-line */}
                  <a onClick={txtToTitleCase}>Title Case</a>
                  {/* eslint-disable-next-line */}
                  <a onClick={txtToSentenceCase}>Sentence case</a>
                </div>
              </div>

              <button
                className={`${styles.btn}`}
                onClick={rmvXtraSpace}
                data-name="Remove Extra Spaces"
              >
                <i className="fa-solid fa-ellipsis"></i>
                {"            "}
                <i className="fa-solid fa-ellipsis"></i>
              </button>

              <button
                className={`${styles.btn}`}
                onClick={undo}
                disabled={undos.length === 0}
                data-name="Undo"
              >
                <i className="fa-solid fa-rotate-left"></i>
              </button>

              <button
                className={`${styles.btn}`}
                onClick={redo}
                disabled={redos.length === 0}
                data-name="Redo"
              >
                <i className="fa-solid fa-rotate-right"></i>
              </button>
            </div>

            <textarea
              rows="15"
              spellCheck="false"
              placeholder="Enter the text to analyze..."
              value={text}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className={`${styles.textProp} ${styles.flex}`}>
            <h4>
              Characters : <span>{charCount}</span>
            </h4>
            <h4>
              Words : <span>{wordCount}</span>
            </h4>
            <h4>
              Sentences : <span>{sentCount}</span>
            </h4>
            <h4>
              Spaces : <span>{spaceCount}</span>
            </h4>
            <h4>
              Paragraphs : <span>{paraCount}</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
