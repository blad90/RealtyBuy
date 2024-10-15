import React, {Component} from "react";

export default class PropertyAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state ={ property : null };
    }

    addProperty(obj ){
        this.setState( { property: obj  });
    }

    onSaveProperty(formData){
        let property = {
            // id :  form.id.value,
            // name: form.name.value
        }

        const propertyId = formData.get("propertyId");
        const propertyName = formData.get("propertyName");
        alert(propertyId);
    }



    render() {
        return (
            <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="propertyId" className="form-label">Property ID</label>
                    <input type="text" className="form-control" id="propertyId"
                           aria-describedby="propertyInfo" name="propertyId" readOnly={true} value="1"/>
                    <div id="propertyInfo" className="form-text">For property identification.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="propertyName" className="form-label">nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="propertyName"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="propertyDescription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="propertyDescription"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="propertyAddress" className="form-label">Address</label>
                    <input type="address" className="form-control" id="propertyAddress"

                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="propertySq" className="form-label">Sq.</label>
                    <input type="text" className="form-control" id="propertySq"

                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="propertyPrice" className="form-label">Price</label>
                    <input type="text" className="form-control" id="propertyPrice"

                    />
                </div>

                <select className="form-control" id="status"
                >
                    <option value="false">AVAILABLE</option>
                    <option value="true">SOLD</option>
                </select>

            </form>
        </div>);
    }
}