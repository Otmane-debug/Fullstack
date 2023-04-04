import React, { Component } from 'react';
import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default class Product extends Component {
 
  product = this.props.product

  render() {

    return (
      <Container className='prod_cont'>
        <div className='titre'>
          <h1 className='my-5'><strong>{ this.product["Brand"]} - {this.product["Street_price"]} $</strong></h1>
        </div>
        <Row>
          <Col sm>
            <img className='im' src={this.product["Picture_1"]} alt="image_product" />
          </Col>
          <Col sm className='text-col'>
            <h3><u>Description :</u></h3>
            <div dangerouslySetInnerHTML={{ __html: this.product["Description"]}} />
            <Link className="btn btn-dark mt-4 mb-2" >Buy</Link>
            <br></br>
            <Link className="btn btn-dark" to={'/Shop/'}>Go Back</Link>
          </Col>
        </Row>
      </Container>
    )
  }
}
