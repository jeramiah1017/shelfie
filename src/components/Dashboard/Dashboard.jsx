import React, { Component } from 'react'
import Product from './Product'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                {this.props.inventory.map((el) => {
                    return <Product key={el.id} item={el}/>
                })}
                Dashboard
            </div>
        )
    }
}
