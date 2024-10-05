import PropertyList from './PropertyList';
import PropertyDetail from './PropertyDetail';
import Header from "./ui/Header";
import React from "react";
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Footer from "./ui/Footer";
import axios from "axios";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            properties: [],
            selectedProperty : null
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8083/api/property')
            .then( res => {
                const properties = res.data;
                this.setState({ properties });
            })
    }



    handleSelectedItem = (property) => {
        this.setState({selectedProperty: property})
    }

    render(){
        const {properties, selectedProperty } = this.state;

        return (<div>
            <Header />
            <PropertyList properties={properties} onSelectProperty={this.handleSelectedItem}/>
            <Footer />
        </div>) ;
    }
}

export default App;