import React from 'react';
import axios from 'axios';

export default class Users extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get('http://localhost:8082/api/user')
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
    }

    render() {
        return (
                <table border={1}>
                    <thead>
                    <td>Name</td>
                    <td>ETC</td>
                    <td>ETC</td>
                    <td>ETC</td>
                    <td>ETC</td>
                    <td>ETC</td>
                    </thead>
                    <tbody>
                {
                    this.state.users
                        .map(user =>
                                <tr>
                                    <td key={user.id}>{user.name}</td>
                                    <td>{user.address}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>{user.password}</td>
                                </tr>
                        )
                }
                    </tbody>
                </table>
        )
    }
}