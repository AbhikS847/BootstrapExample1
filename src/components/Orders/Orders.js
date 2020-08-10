import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Orders extends React.Component {
  constructor(props){
    super(props);
    this.state={
      businessName:"Demo business",
      customerName:"Demo username",
      deliverOn:"Mon,Tues,Wed",
      Products:"Levain,Vegan",
      Quantity:"150",
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar justify-content-between">
          <NavLink
            to="/orders"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            <h1>Orders</h1>
          </NavLink>
          <form className="form-inline">
            <NavLink to="/order/search">
              <input
                className="form-control mr-sm-2 input-lg"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </NavLink>
            <NavLink
              to="/order/add"
              className="nav-link mr-sm-2"
              activeClassName="nav-link-active"
            >
              <h1>
                <i className="icon plus small" />
              </h1>
            </NavLink>
          </form>
        </nav>
        <Container>
          <Row className="px-2 py-2 d-none d-sm-flex">
            <Col md={5} lg={4}>Basic info</Col>
            <Col md={5} lg={4}>Deliver on</Col>
            <Col md={2} lg={2}>Products</Col>
            <Col md={1} lg={1}>Quantity</Col>
          </Row>
          <Row className="px-1 py-3" id="whiteBoard">
              <Col xs={8} md={5} lg={4}>
                <b>{this.state.businessName}</b>
                <p>{this.state.customerName}</p>
              </Col>
              <Col xs={8} md={5} lg={4}><p>{this.state.deliverOn}</p></Col>
              <Col xs={8} md={2} lg={2}><p>{this.state.Products}</p></Col>
              <Col xs={8} md={2} lg={2}><p>{this.state.Quantity}</p></Col>
              <Col xs={8} md={1} lg={1}><NavLink to={`orders/edit/`}><i className="icon edit" /></NavLink></Col>
            </Row>

          </Container>
      </div>
    );
  }
}

export default Orders;
