import { Component } from 'react'
import "../styles/style.css";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

export default class Shop extends Component {

  elements = this.props.elements

  render() {

    return (
    <>
      <div className='titre'>
        <h1><strong>Shop Now</strong></h1>
      </div>
      <Container> 
        <div className='row'>
            { this.props.elements.map( element => (
              <div className='col-md-4'>
                <Card className='mx-auto my-2' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={element["Picture_1"]} />
                  <Card.Body>
                    <Card.Title className='card_titre'>{element["Brand"]} - {element["Street_price"]} $</Card.Title>
                    <Card.Text>
                      <Link id='card_btn' className="btn btn-secondary" 
                      to={`/product/${element["Model_id"]}`} >
                      Show More</Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
      </Container>
    
    </>  
    )
  }
}
