import { useContext, useState, useEffect } from "react";

import { Button } from "react-bootstrap";
import { ThemeContext } from "../../contexts/ThemeContextProvider";

const CommentForm = ({
  handleSubmit,
  comment,
  setComment,
  setVote,
  vote,
  title,
  isModify,
}) => {
  const { theme } = useContext(ThemeContext);
  const [themeClass, setThemeClass] = useState("dark-theme");

  let margin = " m-2";
  useEffect(() => {
    theme === "dark"
      ? setThemeClass("dark-theme")
      : setThemeClass("white-theme");
  }, [theme]);

  return (
    <form
      className={"p-2 " + themeClass}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label className={margin}> {title} </label>
      <input
        className={margin}
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <label className={isModify ? "white-theme" : themeClass + margin}>
        Dai un voto:
      </label>
      <select
        className={margin}
        value={vote}
        onChange={(e) => setVote(e.target.value)}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <Button type="submit" variant="primary" className={"m-2 "}>
        Submit
      </Button>
    </form>
  );
};

export default CommentForm;
