import React, { Component } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";

export class CardApi extends Component {
  render() {
    return (
      <div>
        <Row xs={1} md={3} className="g-4">
          {this.props.dataCurd.map((obj) => {
            return (
              <>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={obj.photo} />
                    <Card.Body>
                      <Card.Title>{obj.name}</Card.Title>
                      <Card.Text>{obj.instructions}</Card.Text>
                      <Button
                        variant="primary"
                        onClick={(e) => {
                          this.props.deletecard(obj.slug);
                        }}
                      >
                        remove from favariote
                      </Button>
                      <Button
                        variant="primary"
                        onClick={(e) => {
                          this.props.updateItem(
                            obj.slug,
                            obj.instructions,
                            obj.photo
                          );
                        }}
                      >
                        update
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default CardApi;
