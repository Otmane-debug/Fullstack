import 'bootstrap/dist/css/bootstrap.min.css'
import Haider from './components/Haider';
import Home from './components/Home';
import Shop from './components/Shop';
import Footer from './components/Footer';
import React, { Component } from 'react';
import {BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Product from './components/Product';
import axios from 'axios';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext';


export default class App extends Component {
  
  state = {
    products: [],
  };

  componentDidMount(){
    axios.get('http://localhost:8000/api/products/')
    .then((res) => {
        this.setState({ products: res.data });
    })
    .catch(err => {})
  }

  render() {

    return (
      <>
          
          <BrowserRouter>
            <AuthProvider>  
              <Haider />
              <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route path='/Login' element={<Login />} />
                  <Route path='/Cutumer_car' element={<Home />} />
                  <Route path='/Register' element={<Register />} />
                  <Route path='/Shop' element={<Shop elements={this.state.products} />} />
                  {this.state.products.map(product => {
                    return <Route path={'/product/' + product["Model_id"]} element={<Product product={product}  />} />
                  })}
                  <Route path="/*" element={<Outlet />} />
              </Routes> 
              <Footer />
            </AuthProvider> 
          </BrowserRouter>

      </>
    );
  }
}

