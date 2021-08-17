import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

function Sample(props)
{
    var items = [
        {
            name: "Repair and Demo Work -- Before",
            description: "Our client wanted a kitchen redone due to water damage",
            image: "https://images.unsplash.com/photo-1579847188804-ecba0e2ea330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
        },
        {
            name: "Repair and Demo Work -- After",
            description: "Completly redone kitchen!",
            image: "https://images.unsplash.com/photo-1579847188804-ecba0e2ea330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <div id="carousel-container">
            <img className='item-image' src={props.item.image} alt={props.item.name} />
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

           
            </div>
        </Paper>
    )
}


export default Sample