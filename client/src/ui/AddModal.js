import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropertyDetail from "../PropertyDetail";
import PropertyAdd from "../PropertyAdd";

class AddModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            propertyToAdd: {
                name: "INTEC",
                description: "House Big",
                address: "Avenida Los Proceres",
                squareFeet: 148,
                price: 85000,
                sold: false
            }
        }
        this.onHandleAdd = this.onHandleAdd.bind(this);
    }

    onHandleAdd = (e) =>{
        e.preventDefault();
        const data = {
            name:this.state.propertyToAdd.name ,
            description:this.state.propertyToAdd.description ,
            address:this.state.propertyToAdd.address ,
            squareFeet:this.state.propertyToAdd.squareFeet ,
            price:this.state.propertyToAdd.price ,
            sold:this.state.propertyToAdd.sold
        }
        console.log(JSON.stringify(data));
        fetch('http://localhost:8083/api/property', { method: 'POST',
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{ 'Content-Type': 'application/json' } })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }


    render() {
       const {property, onAddProperty} = this.props;
        console.log(JSON.stringify( property))
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Add Property</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <PropertyAdd  />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Cerrar
                    </Button>

                    <Button variant="primary" onClick={this.onHandleAdd }  >
                        Registrar Propiedad </Button>

                    {/*<Button variant="primary" onClick={() => {*/}

                    {/*    const propertyToAdd = this.state.propertyToAdd;*/}
                    {/*    alert("AddModal: " + propertyToAdd);*/}
                    {/*    this.props.handleAddItem(propertyToAdd);*/}
                    {/*}}>*/}
                    {/*    Registrar Propiedad*/}
                    {/*</Button>*/}
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AddModal;