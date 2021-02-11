import React, { useRef, useState } from "react";
import styles from "./Cases.module.css";

const Cases = () => {
  const [inputValue, setInputValue] = useState("");
  const [quantifier, setQuantifier] = useState(8);
  const [name, setName] = useState("");
  const tableRef = useRef(null);

  const casesRegex = new RegExp("^([0-9]" + `{${quantifier}}` + ")$", "g");

  const copyToClipBoard = () => {
    let range, sel;

    // Ensure that range and selection are supported by the browsers
    if (document.createRange && window.getSelection) {
      range = document.createRange();
      sel = window.getSelection();
      // unselect any element in the page
      sel.removeAllRanges();

      try {
        range.selectNodeContents(tableRef.current);
        sel.addRange(range);
      } catch (e) {
        range.selectNode(tableRef.current);
        sel.addRange(range);
      }

      document.execCommand("copy");
    }

    sel.removeAllRanges();

    console.log("Element Copied! Paste it in a file");
  };

  return (
    <div>
      <label htmlFor="quantifier">Case Number Quantifier: {quantifier}</label>
      <input
        id="quantifier"
        value={quantifier}
        type="number"
        onChange={(evt) => setQuantifier(evt.target.value)}
      />
      <label htmlFor="name">Set Name</label>
      <input
        id="name"
        value={name}
        onChange={(evt) => setName(evt.target.value)}
      />
      <h3>Enter Case Number</h3>
      <textarea
        value={inputValue}
        onChange={(evt) => setInputValue(evt.target.value)}
        className={styles.casesInput}
      />
      <button onClick={copyToClipBoard}>Copy</button>
      <table ref={tableRef}>
        <tr className={styles.tableRow}>
          <th className={styles.tableHeading}>Name</th>
          <th className={styles.tableHeading}>Case Number</th>
        </tr>
        {inputValue
          .split(/\s/)
          .filter((input) => input.match(casesRegex))
          .map((caseNumbers) => (
            <tr>
              <td className={styles.tableData}>{name}</td>
              <td className={styles.tableData}>{caseNumbers}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Cases;
