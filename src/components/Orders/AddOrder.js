import React from 'react';
import { NavLink } from 'react-router-dom';
import {Container, Button, Row, Form, Col,Table} from 'react-bootstrap';

class AddOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className="ui items">
          <div className="item">
            <div className="middle aligned content">
              <div className="ui left floated">
                <NavLink to="/orders">Back</NavLink>
                <h1>
                  <b>
                    <i />
                    Add an order
                    </b>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <Container>
          <div id="whiteBoard">
            <Row>
              <Col sm={12}>
              <Form.Group className="display-inline-block" style={{}} controlId="activeOrder">
                  <Form.Check
                    size="lg"
                    type="checkbox"
                    aria-label="checkbox"
                    required
                    inline
                  />
                  <Form.Label>
                  <span>
                  Active orders
                  <small id="emailHelp" className="form-text text-muted">Set whether the order is visible in the schedule or not</small>
                  </span>
                  </Form.Label>
                </Form.Group>
                <Form.Group controlId="standingOrder">
                  <Form.Check
                    size="lg"
                    type="checkbox"
                    aria-label="checkbox"
                    required
                    inline
                  />
                  <Form.Label>
                  <div>
                  <span>
                  Standing orders
                  <small id="emailHelp" className="form-text text-muted">Create a standing order</small>
                  </span>
                  </div>
                  </Form.Label>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
              />
            </Form.Group>
              </Col>
            </Row>
          </div>
          <br />
          <div id="whiteBoard">
            <h2>Custom Order</h2>
            <Row>
              <Col sm={12}>
                {' '}
                <Form.Group controlId="delvieryDate">
                  <Form.Label>Delivery date</Form.Label>
                  <Form.Control
                    size="lg"
                    type="date"
                    placeholder="DD/MM/YY"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>
          <div id="whiteBoard">
            <h2>Delivery information</h2>
            <Row>
              <Col sm={12}>
                {' '}
                <Form.Group controlId="deliverInformation">
                  <Form.Label>Deliver to</Form.Label>
                  <Form.Control as="select" placeholder="Choose client">
      <option>Anthony</option>
      <option>Pierre</option>
      <option>Josh</option>
      <option>Abhik</option>
    </Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </div>
          <Table white bordered >
  <thead>
    <tr>
      <th>Quantity</th>
      <th>Product</th>
      <th>Variant</th>
      <th>Size</th>
      <th>Flavour</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{width:"95px"}}>  <Form.Group controlId="formPlaintextEmail">
      <Form.Control size="sm"/>
  </Form.Group></td>
      <td>
      <Form.Group controlId="deliverInformation">
      <Form.Control as="select" placeholder="Choose client">
      <option>Levain</option>
      <option>Gluten Free</option>
      <option>Vegan</option>
    </Form.Control>
                </Form.Group>
      </td>
      <td>
      <Form.Group controlId="deliverInformation">
      <Form.Control as="select" placeholder="Choose client">
      <option>Cruller</option>
    </Form.Control>
                </Form.Group>
      </td>
      <td>
      <Form.Group controlId="deliverInformation">
      <Form.Control as="select" placeholder="Choose client">
      <option>Small</option>
      <option>Regular</option>
      <option>Large</option>
    </Form.Control>
                </Form.Group>
      </td>
      <td>
      <Form.Group controlId="formPlaintextEmail">
    <Col xs={true}>
      <Form.Control />
    </Col>
  </Form.Group>
      </td>
    </tr>
  </tbody>
</Table>
          <Button variant="primary" size="lg" block>
              Add order
            </Button>
        </Container>
      </div>
    );
  }
}

export default AddOrder;
