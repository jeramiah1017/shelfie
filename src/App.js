import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Product from './components/Dashboard/Product'
import Dashboard from './components/Dashboard/Dashboard'


export default class App extends Component {
  constructor(){
      super() 
          this.state = {
         inventory: [{
           name: "",
           img: '',
           price: 0
         }]
      }
      // this.getInventory = this.getInventory.bind(this);
  } 

  render() {
    return(
  <div className="App">
  <Header />
  <Dashboard />
  <Form />
  </div>
    )
  }
}