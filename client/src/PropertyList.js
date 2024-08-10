import React from "react";
import axios from 'axios';
import EditModal from "./ui/EditModal";


export default class PropertyList extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            showModal : false,
            editProperty: null,
            propertyClicked: false
        }
    }

    handleShow = () => {
        this.setState({ showModal: true });
        this.setState({propertyClicked: true});

        this.setState((prevState) => ({
            showModal: {
                ...prevState.showModal,
                showModal: true,
            },
            propertyClicked: {
                ...prevState.propertyClicked,
                propertyClicked: true,
            },
        }));
    }

    handleClose = () => {
        this.setState({ showModal: false });
    }

    handleEditItem = (property) => {
        this.setState({editProperty: property})
    }

    render(){
       const {properties, onSelectProperty} = this.props;
        const filteredProperty = properties.filter(property => property.price > 100)[0];
        console.log(filteredProperty)

        return (<div className="container-sm"><table border={1} className="table table-sm table-hover">
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
                        <button onClick={this.handleShow} type="button" className="btn btn-secondary"  > Edit</button>&nbsp;
                        <button type="button" className="btn btn-danger"> Delete</button>
                    </td>
                </tr>
                )
            }
            </tbody>
        </table>
            <EditModal
                show={this.state.showModal}
                handleClose={this.handleClose}
                editProperty={filteredProperty}
            />
        </div>);
    }
}