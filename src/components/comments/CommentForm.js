import { Button } from "react-bootstrap";

const CommentForm = ({handleSubmit, comment, setComment, setVote, vote, title, reloadFather}) => {

  
    return ( 
        <form 
        className="p-2"
        onSubmit={(e) => {
            handleSubmit(e); 
            }}>
          <label> {title} </label>
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