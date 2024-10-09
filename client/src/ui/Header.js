import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import style from './style.css';
import EditModal from "./EditModal";
import AddModal from "./AddModal";

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal : false,
            property: null
        }
    }

    handleShow = () => {
        this.setState({ showModal: true });

        this.setState((prevState) => ({
            showModal: {
                ...prevState.handleShow,
                showModal: true,
            },
        }));
    }

    handleAddItem = (p) => {
        alert("agregado exitosamente");
        this.setState({property: p})
    }

    handleClose = () => {
        this.setState({ showModal: false });
    }

    render (){
        return (<div>
            <div className="bg-realtybuy">
                ...

            </div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand ms-3" href="#">RealtyBuy</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#" onClick={this.handleShow}>Add Property</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Properties</a>
                        </li>


                    </ul>
                    <form className="d-flex">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <AddModal
                show={this.state.showModal}
                handleClose={this.handleClose}
            />

        </div>);
    }
}

export default Header;