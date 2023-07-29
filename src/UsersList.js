import React from 'react'

const UsersList = ({ usersList }) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>username</td>
                    <td>email</td>
                    <td>address</td>
                    <td>phone</td>
                    <td>website</td>
                    <td>company</td>
                </tr>
            </thead>
            <tbody>
                {usersList.map((userItem) => (
                    <tr key={userItem.id}>
                        <td>{userItem.id}</td>
                        <td>{userItem.name}</td>
                        <td>{userItem.username}</td>
                        <td>{userItem.email}</td>
                        <td>{userItem.address.zipcode}</td>
                        <td>{userItem.phone}</td>
                        <td>{userItem.website}</td>
                        <td>{userItem.company.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UsersList