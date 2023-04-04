import { Component } from 'react'
import "../styles/style.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='back-im'>
          <div className='titr'>
            <h1>Chillist With Fashion</h1>
            <Button className='btn-titr' variant="outline-dark">Shop Now</Button>
          </div>
        </div>
        <div className='next-title'>FREE SHIPPING WORLWIDE</div>
        <div className="quote">You can have anything you want in life if you dress for it. —Edith Head</div>
        <div className="browse">
          <Container>
            <Row>
              <Col sm><div className="img-browse"></div></Col>
              <Col sm>
                <div className="text-browse">
                  Browse through multiple outfits.
                  <br />
                  Find the item you like by filtering the data.
                  <br />
                  you can get the style that you want why simple clicks.
                  <br />
                  <Button className='btn-browse' variant="outline-dark">Find More</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    </div>
    )
  }
}
