import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function KitchenSinkExample({ item }) {
  return (
    <Card style={{ width: "18rem" , height: "26rem" }}>
      <Card.Img variant="top" src={item.thumbnail} />
      <Card.Body>
        <Card.Title>{item.brand}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> Price : {item.price}</ListGroup.Item>
        <ListGroup.Item>Rating : {item.rating}</ListGroup.Item>
        <ListGroup.Item>Category : {item.category}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default KitchenSinkExample;
