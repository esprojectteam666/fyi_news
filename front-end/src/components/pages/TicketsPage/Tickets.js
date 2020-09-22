import React, { Component } from 'react';
import {InfoConsumer} from '../../context';
import Info from '../../Info';

class Tickets extends Component {
    render() {
        return (

            <div className="container">
                <div className = "row mt-5">
                <InfoConsumer>
                {value => {
                    return value.ticketsinfo.map(item =>{
                        return <Info key ={item.id} item={item}/>; 
                    });
                }}
            </InfoConsumer>

                </div>
            </div>


        )
    }
}

export default Tickets;