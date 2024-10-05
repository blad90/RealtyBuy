import React from "react";
import axios from 'axios';

export default class PropertyDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            property: this.props.property,
            id: this.props.id,
            name: this.props.property.name,
            description: this.props.property.description,
            address: this.props.property.address,
            squareFeet: this.props.property.squareFeet,
            price: this.props.property.price,
            sold: this.props.property.status,
        }
    }

        updatePropertyName(event){
            this.setState({ name: event.target.value });
        }

        updatePropertyDesc(event){
            this.setState({ description: event.target.value });
        }

        updatePropertyAddress(event){
            this.setState({ address: event.target.value });
        }

    updatePropertySquareFeet(event){
        this.setState({ squareFeet: event.target.value });
    }

    updatePropertyPrice(event){
        this.setState({ price: event.target.value });
    }

    updatePropertySold(event){
        this.setState({ sold: event.target.value });
    }

    render(){
        const {property} = this.props;
        console.log('PropertyDetail: ' + property.name)

        return (<div>
            <form>
                <div className="mb-3">
                    <label htmlFor="propertyId" className="form-label">Property ID</label>
                    <input type="text" className="form-control" id="propertyId"
                           aria-describedby="propertyInfo" readOnly={true} value={this.state.property.id}/>
                    <div id="propertyInfo" className="form-text">For property identification.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="propertyName" className="form-label">nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="propertyName"
                        value={this.state.name}
                        onChange={(event) =>
                            this.updatePropertyName(event)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="propertyDescription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="propertyDescription"
                           value={this.state.description}
                           onChange={(event) =>
                               this.updatePropertyDesc(event)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="propertyAddress" className="form-label">Address</label>
                    <input type="address" className="form-control" id="propertyAddress"
                           value={this.state.address}
                           onChange={(event) =>
                               this.updatePropertyAddress(event)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="propertySq" className="form-label">Sq.</label>
                    <input type="text" className="form-control" id="propertySq"
                           value={this.state.squareFeet}
                           onChange={(event) =>
                               this.updatePropertySquareFeet(event)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="propertyPrice" className="form-label">Price</label>
                    <input type="text" className="form-control" id="propertyPrice"
                           value={this.state.price}
                           onChange={(event) =>
                               this.updatePropertyPrice(event)}
                    />
                </div>

                <select className="form-control" id="status" value={this.state.sold}
                        onChange={(event) =>
                            this.updatePropertySold(event)}
                >
                    <option value="false">AVAILABLE</option>
                    <option value="true">SOLD</option>
                </select>

                {/*<div className="mb-3">*/}
                {/*    <label htmlFor="propertySold" className="form-label">Status</label>*/}
                {/*    <input type="text" className="form-control" id="propertySold"*/}
                {/*           value={this.state.status}*/}
                {/*           onChange={(event) =>*/}
                {/*               this.updatePropertyStatus(event)}*/}
                {/*    />*/}
                {/*</div>*/}
            </form>
        </div>);
    }
}