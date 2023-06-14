import React from "react";

import Users from "../src/Users";

class UserComponent extends React.Component{

    constructor(props) {

        super(props);

        this.state = {

            users:[]

        }

    }

    componentDidMount(){

        Users.getUsers().then((response) =>{

            this.setState({users: response.data})

        });

    }

    render(){

        return (

            <div>

                <h1>Users</h1>

                <table border={1}>

                    <thead>

                    <tr>

                        <td>NAME </td>

                        <td>ADDRESS</td>

                        <td>EMAIL</td>

                        <td>USERNAME</td>

                        <td>PASSWORD</td>

                    </tr>

                    </thead>

                    <tbody>

                    {

                        this.state.users.map(user =>

                            <tr key={user.id}>

                                <td>{user.name}</td>

                                <td>{user.address}</td>

                                <td>{user.email}</td>

                                <td>{user.username}</td>

                                <td>{user.password}</td>

                            </tr>

                        )

                    }

                    </tbody>

                </table>

            </div>

        )

    }

}

export default UserComponent;