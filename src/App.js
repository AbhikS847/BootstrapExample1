import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders';
import Today from './components/Today';
import Customers from './components/Customers/Customers';
import AddCustomer from './components/Customers/AddCustomer';
import EditCustomer from './components/Customers/EditCustomer';
import Production from './components/Production';
import AddProduct from './components/Products/AddProducts';
import AddOrder from './components/Orders/AddOrder';
import EditOrder from './components/Orders/EditOrder';
import Navbar from './components/Navbar';
import './App.css';
import SearchOrder from './components/Orders/SearchOrder';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Row>
            <Col sm={0}>
              <Navbar />
            </Col>
            <Col sm={10}>
              <Route path="/products" exact component={Products} />
              <Route path="/orders" exact component={Orders} />
              <Route path="/today" exact component={Today} />
              <Route path="/" exact component={Production} />
              <Route path="/product/new" exact component={AddProduct} />
              <Route path="/order/add" exact component={AddOrder} />
              <Route path="/order/search" exact component={SearchOrder} />
              <Route path="/order/edit" exact component={EditOrder} />
              <Route path="/customers" exact component={Customers} />
              <Route path="/customers/add" exact component={AddCustomer} />
              <Route path="/customers/edit/:id" exact component={EditCustomer} />
            </Col>
          </Row>
        </Router>

      </div>

    );
  }
}

export default App;
