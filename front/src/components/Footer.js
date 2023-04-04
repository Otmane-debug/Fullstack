import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import facebook_icon from '../images/facebook _icon.png'
import instagram_icon from '../images/instagram_icon.png'
import linkedin_icon from '../images/linkedin_icon.png'
import twitter_icon from '../images/twitter_icon.png'

export default function Footer() {
  return (
    <div className='footer'>
        <Container>
            <Row>
                <Col sm className="colmns">
                    <h5 className='footTitle'>STAY CONNECTED</h5>
                    <br />
                    <a href='' ><img src={facebook_icon} alt="facebook" /></a>
                    <a href='' ><img src={instagram_icon} alt="facebook" /></a>
                    <a href='' ><img src={linkedin_icon} alt="facebook" /></a>
                    <a href='' ><img src={twitter_icon} alt="facebook" /></a>
                </Col>
                <Col sm className="colmns">
                    <h5 className='footTitle'>BE OUR FRIEND</h5>
                    <Form>
                    <Form.Control className="form" type="email" placeholder="Enter email" />
                    <Button id="button" className="form" variant="light" type="submit">
                        Subscribe now
                    </Button>
                    </Form>
                </Col>
                <Col sm className="colmns">
                    <h5 className='footTitle'>NEED ASSISTANCE?</h5>
                    <p>123-456-7890</p>
                    <p>info@chillist.com</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
