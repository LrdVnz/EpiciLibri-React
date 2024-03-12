import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const SingleBook = ({ book , key }) => {
    return ( 
        <Col md={2} key={key}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              <span> {book.category} </span>
              <span> € {book.price} </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
     );
}
 
export default SingleBook;