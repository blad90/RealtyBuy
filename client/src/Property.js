import React from "react";
import axios from 'axios';

export default class Property extends React.Component {



    render(){
       const {properties, onSelectProperty} = this.props;

        return (<div className="mt-5"><table border={1} className="table table-hover">
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Address</th>
                <th>Sq ft</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {
                properties.map( property =>
                <tr key={property.id} onClick={()=>onSelectProperty(property)}>
                    <td > {property.name} </td>
                    <td > {property.description } </td>
                    <td > {property.address } </td>
                    <td > {property.squareFeet } </td>
                    <td > ${property.price } </td>
                    <td >
                        <button  type="button" className="btn btn-primary" >  View</button>&nbsp;
                        <button type="button" className="btn btn-secondary"> Edit</button>&nbsp;
                        <button type="button" className="btn btn-danger"> Delete</button>
                    </td>
                </tr>
                )
            }
            </tbody>
        </table></div>);
    }
}