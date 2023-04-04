import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class Register extends Component {


    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          email: '',
          address1: '',
          address2: '',
          city: '',
          zip: '', 
          first_name: '',
          last_name: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
       }
    
      handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      }

    handleSubmit(event) {

      axios.post('http://localhost:8000/api/users/register/',this.state)
          .then(response => {
              console.log('User created successfully!');
              console.log(response.data)

          })
          .catch(error => {
            console.log(error.response.data);
          });
    
          event.preventDefault();
      }



  render() {
    return (
      <div className='log_res'>
        <form onSubmit={this.handleSubmit}  method='post'>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="inputEmail4">UserName</label>
                      <input type="text" name="username" value={this.state.username} onChange={this.handleChange} className="form-control" id="inputUserName" placeholder="Username" />
                  </div>  
                  <div className="form-group">
                    <label htmlFor="inputPassword4">Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="inputPassword" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="inputEmail" placeholder="Email" />
                  </div>
                  <div className="form-group">
                  <label htmlFor="inputEmail4">First Name</label>
                    <input type="text" name='first_name' value={this.state.first_name} onChange={this.handleChange} className="form-control" id="inputFirstName" placeholder="First Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputEmail4">Last Name</label>
                      <input type="text" name='last_name' value={this.state.last_name} onChange={this.handleChange} className="form-control" id="inputLastName" placeholder="Last Name" />
                    </div>
                  </div>  
                  <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" name='address1' value={this.state.address1} onChange={this.handleChange} className="form-control" id="inputAddress" placeholder="1234 Main St" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputAddress2">Address 2</label>
                    <input type="text" name='address2' value={this.state.address2} onChange={this.handleChange} className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                  </div>
                  <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="inputCity">City</label>
                    <input type="text" name='city' value={this.state.city} onChange={this.handleChange} className="form-control" id="inputCity" />
                  </div>
                  <div class="form-group">
                    <label htmlFor="inputZip">Zip</label>
                    <input type="text" name='zip' value={this.state.zip} onChange={this.handleChange} className="form-control" id="inputZip" />
                  </div>
                </div>
                <Button className="my-3" variant="secondary" type="submit">
                  Submit
                </Button>
                <Button className="my-3" variant="dark" onClick={this.handleClose_sign_in}>
                  Close
                </Button>
              </form>
      </div>
    )
  }
}
