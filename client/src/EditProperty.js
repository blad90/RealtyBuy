import React from "react";
import axios from 'axios';

export default class EditProperty extends React.Component {


    render(){
        const {property} = this.props;
        
        return (<div>
            <form>
                <div className="mb-3">
                    <label htmlFor="propertyId" className="form-label">Property ID</label>
                    <input type="text" className="form-control" id="propertyId" aria-describedby="propertyInfo"/>
                    <div id="propertyInfo" className="form-text">For property identification.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="propertyName" className="form-label">Property Name</label>
                    <input type="text" className="form-control" id="propertyName"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="propertyDescription" className="form-label">Property Description</label>
                    <input type="text" className="form-control" id="propertyDescription"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="propertyAddress" className="form-label">Property Address</label>
                    <input type="address" className="form-control" id="propertyAddress"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="propertySq" className="form-label">Property Sq.</label>
                    <input type="text" className="form-control" id="propertySq"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="propertyPrice" className="form-label">Property Price</label>
                    <input type="text" className="form-control" id="propertyPrice"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="propertySold" className="form-label">Property Status</label>
                    <input type="text" className="form-control" id="propertySold"/>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>);
    }
}