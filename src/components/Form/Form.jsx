import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import css from "./Form.module.css";

const notify = () =>
  toast("Please, enter the text", { position: "bottom-center" });

const Form = ({ handleSearch, value }) => {
  const [inputQuery, setInputQuery] = useState(value ?? "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuery = inputQuery.trim();
    if (!newQuery) {
      notify();
      return;
    }
    handleSearch(newQuery);
  };
  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          type="text"
          name="query"
          placeholder="Search..."
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
      <Toaster />
    </>
  );
};

export default Form;
