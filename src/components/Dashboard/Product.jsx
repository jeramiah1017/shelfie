import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div className='Product'>
                Product
                <h1>{this.props.name}</h1>
                <img src={this.props.img}/>
                <p>{this.props.price}</p>
            </div>
        )
    }
}
