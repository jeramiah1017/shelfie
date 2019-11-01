import React, { Component } from 'react'
// import { url } from 'inspector'

export default class Form extends Component {
    constructor(){
        super() 
            this.state = {
            img: '',
            productName: '',
            price: 0
        }
        
    } 
    imgChange = (event) => {
        event.preventDefault()
       const url = event.target.value
       this.setState({
        img: url
       })
       console.log(this.state.img)
       
    }
    nameChange(event){
    event.preventDefault()
    const name = event.target.value
    this.setState({
      productName: name
       })
       console.log(this.state.productName)
      
    }
    priceChange(event){
        event.preventDefault()
        const price = event.target.value
        this.setState({
            price: price
        })
        console.log(this.state.price)
    }
    clearBoxes(){
    this.setState({
        img: '',
        productName: '',
        price: 0

    })
    console.log(this.state.img)

    }
            render() {
                return (
                    <div>
                        Form
                        <input type='text' placeholder="URL" onChange={event => this.imgChange(event)} />
                        
                        <input type='text' placeholder='ProductName'  onChange={event => this.nameChange(event)} />

                        <input type='number' placeholder='Price' onChange={event => this.priceChange(event)} />

                        <button onClick={() => this.clearBoxes()}>Cancel</button>
                        <button>Add</button>
                    </div>
                )
            }
    }
    