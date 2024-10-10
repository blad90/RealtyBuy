import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropertyDetail from "../PropertyDetail";
import PropertyAdd from "../PropertyAdd";

class AddModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            propertyToAdd: {}
        }
    }
    onAddProperty(){
        this.setState(prevState => {
            prevState.propertyToAdd = this.props;
        });
    }

    render() {
        const {property, onEditProperty} = this.props;

        return (
            <Modal show={this.props.show} onHide={this.props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Add Property</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <PropertyAdd />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={() => {
                        const propertyToAdd = this.state.propertyToAdd;
                        this.props.handleAddItem(propertyToAdd);
                    }}>
                        Registrar Propiedad
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AddModal;