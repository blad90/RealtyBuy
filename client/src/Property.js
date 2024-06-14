import React from "react";
import  axios from 'axios';

export default class Property extends React.Component {
    state = {
        properties: []
    }

    componentDidMount() {
        axios.get('http://localhost:8083/api/property')
            .then( res => {
                const properties = res.data;
                this.setState({ properties });
            })
    }

    render(){
        return (<table border={1}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>address</th>
                <th>sq</th>
                <th>price</th>
            </tr>
            </thead>
            <tbody>
            {
                this.state.properties.map( property =>
                <tr key={property.id}>
                    <td > {property.name} </td>
                    <td > {property.description } </td>
                    <td > {property.address } </td>
                    <td > {property.squareFeet } </td>
                    <td > {property.price } </td>
                </tr>
                )
            }
            </tbody>
        </table>);
    }
}