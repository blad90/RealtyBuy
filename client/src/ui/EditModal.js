import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropertyDetail from "../PropertyDetail";

class EditModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            propertyToEdit: this.props.editProperty
        }
    }
    onEditProperty(){
        this.setState(prevState => {
            prevState.propertyToEdit = this.props;
        });
    }

render() {
        const {property, onEditProperty} = this.props;

        return (
            <Modal show={this.props.show} onHide={this.props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Property Details - Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                <PropertyDetail property={this.props.editProperty} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={()=> this.props.handleEditItem(property)}>
                        Guardar Cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default EditModal;
