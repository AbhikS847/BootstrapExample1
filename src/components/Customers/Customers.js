import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      loading: true,
      query: ''
    };
    this.loadData = this.loadData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    try {
      await axios
        .get('http://localhost:5000/api/customers')
        .then(response => this.setState({ customers: response.data }));
    } finally {
      this.setState({ loading: false });
    }
  }

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    const { customers, query } = this.state;
    const filteredCustomers = customers.filter( customer => {
      return customer.businessName.toLowerCase().includes(query.toLowerCase()) 
      || customer.contactName.toLowerCase().includes(query.toLowerCase())
      || customer.email.toLowerCase().includes(query.toLowerCase())
      || customer.phone.toString().toLowerCase().includes(query.toLowerCase());
    })

    // Notice
    const filteredCustomerCount = filteredCustomers.length;
    const customerCount = customers.length;
    let notice;
    if (filteredCustomerCount === customerCount) {
      notice = <p className="notice">Showing {customerCount} total customers</p>
    } else {
      notice = <p className="notice">Showing {filteredCustomerCount} of {customerCount} customers</p>
    }

    return (
      <div>
        <nav className="navbar justify-content-between">
          <NavLink to="/customers" className="nav-link" activeClassName="nav-link-active"><h1>Customers</h1></NavLink>
          <form className="form-inline">
            <input className="form-control mr-sm-2 input-lg" type="search" placeholder="Search" aria-label="Search" value={query} onChange={this.handleChange}/>
            <NavLink to="/customers/add" className="nav-link mr-sm-2" activeClassName="nav-link-active"><h1><i className="icon plus small" /></h1></NavLink>
          </form>
        </nav>
        <Container>
          <Row className="px-2 py-2 d-none d-sm-flex">
            <Col md={5} lg={4}>Basic info</Col>
            <Col md={5} lg={4}>Email</Col>
            <Col md={2} lg={2}>Phone</Col>
            <Col md={1} lg={1} />
          </Row>
          {filteredCustomers.map(item => (
            <Row key={item._id} className="px-1 py-3" id="whiteBoard">
              <Col xs={8} md={5} lg={4}>
                <b>{item.businessName}</b>
                <p>{item.contactName}</p>
              </Col>
              <Col xs={8} md={5} lg={4}><p>{item.email}</p></Col>
              <Col xs={8} md={2} lg={2}><p>{item.phone}</p></Col>
              <Col xs={8} md={1} lg={1}><NavLink to={`customers/edit/${item._id}`}><i className="icon edit" /></NavLink></Col>
            </Row>
          ))}
          {notice}
        </Container>
      </div>
    );
  }
}

export default Customers;
