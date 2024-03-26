import { Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContextProvider";

const CommentForm = ({handleSubmit, comment, setComment, setVote, vote, title, reloadFather}) => {
 
    const { theme } = useContext(ThemeContext)
    const [ classTheme, setClassTheme ] = useState('dark-theme')

    useEffect(() => {
       theme === 'dark' ? setClassTheme('dark-theme') : setClassTheme('white-theme');
    }, [theme])

    return ( 
        <form 
        className={ "p-2 " + classTheme }
        onSubmit={(e) => {
            handleSubmit(e); 
            }}>
          <label > {title} </label>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <label> Dai un voto:</label>
          <select value={vote} onChange={(e) => setVote(e.target.value)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <Button 
          type="submit"
          variant="primary"
          className="m-2"
          >Submit</Button>
        </form>
     );
}
 
export default CommentForm;