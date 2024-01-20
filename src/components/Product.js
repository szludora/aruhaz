import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default function Product(props) {
  {
    console.log(props);
  }
  return (
    <Col sm="12" md="4" lg="3">
      <Card style={{ width: "20rem", height: "20rem" }}>
      <Card.Header className="text-center">{props.obj.name}</Card.Header>
        <Card.Body style={{width: "20rem", height: "20rem" }}>
          <Card.Img variant="top" src={props.obj.pic}  style={{ height: "10rem"}}/>
        </Card.Body>
          <Button variant="primary">Kosárba</Button>
      </Card>
    </Col>
  );
}
