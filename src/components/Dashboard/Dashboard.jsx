import React, { Component } from 'react'; 
import Product from './Product'; 
import axios from 'axios'

export default class Dashboard extends Component {
    constructor() {
        super(); 
        
        this.state = {
            inventory: [], 
        }
    }

    componentDidMount() {
        this.getInventory(); 
      };
      
    getInventory = () => {
        axios.get('/api/inventory')
        .then(response => {
          this.setState({
            inventory: response.data 
          })
        })
      };
      
    deleteProduct = (id) => {
        axios.delete(`/api/product/${id}`)
            .then(() => {
                this.getInventory();
            })
            .catch(error => {console.log('Error in Dashboard:', error)})
    }
    render() {
        const { inventory } = this.state; 
        const mappedInventory = inventory.map((product, index) => {
            return(
                <Product key={index} product={product} deleteProduct={this.deleteProduct} 
                handleEditToggle={this.props.handleEditToggle}/> 
            )
        })
        return (
            <div>
                    {mappedInventory}
            </div>
        )
    }
}