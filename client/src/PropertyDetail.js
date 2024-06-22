import React from "react";
import axios from 'axios';

export default class Property extends React.Component {


    render(){
        const {property} = this.props;
        
        return (<div>
            <div className="card w-25 m-5" >
                <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{property.name}</h5>
                    <p className="card-text">{property.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{property.address}</li>
                    <li className="list-group-item">{property.squareFeet}</li>
                    <li className="list-group-item">${property.price}</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Purchase</a>
                    <a href="#" className="card-link">Contact Seller</a>
                </div>
            </div>

        </div>);
    }
}