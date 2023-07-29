const UsersList = ({ tableData }) => {
    console.log(JSON.stringify(tableData))
    return (
        <>
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
                {tableData.map((tableRow) => (
                    <tr key={tableRow.id}>
                        <td>{tableRow.id}</td>
                        <td>{tableRow.name}</td>
                        <td>{tableRow.username}</td>
                        <td>{tableRow.email}</td>
                        <td>{tableRow.address.zipcode}</td>
                        <td>{tableRow.phone}</td>
                        <td>{tableRow.website}</td>
                        <td>{tableRow.company.name}</td>
                    </tr>
                ))}
            </tbody>
        </>
    )
}

export default UsersList