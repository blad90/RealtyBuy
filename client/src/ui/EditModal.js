import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class EditModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            properties : []
        }
    }



    render() {
        const {properties, onEditProperty} = this.props;

        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Property Details - Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="propertyId" className="form-label">Property ID</label>
                            <input type="text" className="form-control" id="propertyId"
                                   aria-describedby="propertyInfo" readOnly={true} value={this.props.editProperty.id}/>
                            <div id="propertyInfo" className="form-text">For property identification.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="propertyName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="propertyName" value={this.props.editProperty.name}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="propertyDescription" className="form-label">Description</label>
                            <input type="text" className="form-control" id="propertyDescription" value={this.props.editProperty.description}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="propertyAddress" className="form-label">Address</label>
                            <input  type="address" className="form-control" id="propertyAddress" value={this.props.editProperty.address}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="propertySq" className="form-label">Sq.</label>
                            <input type="text" className="form-control" id="propertySq" value={this.props.editProperty.squareFeet}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="propertyPrice" className="form-label">Price</label>
                            <input type="text" className="form-control" id="propertyPrice" value={this.props.editProperty.price}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="propertySold" className="form-label">Status</label>
                            <input type="text" className="form-control" id="propertySold" value={this.props.editProperty.status}/>
                        </div>

                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={this.props.handleClose}>
                        Guardar Cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default EditModal;
