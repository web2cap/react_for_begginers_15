const CommentsList = ({ tableData }) => {
    console.log(JSON.stringify(tableData))
    return (
        <>
            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>email</td>
                    <td>body</td>
                    <td>postId</td>
                </tr>
            </thead>
            <tbody>
                {tableData.map((tableRow) => (
                    <tr key={tableRow.id}>
                        <td>{tableRow.id}</td>
                        <td>{tableRow.name}</td>
                        <td>{tableRow.email}</td>
                        <td>{tableRow.body}</td>
                        <td>{tableRow.postId}</td>
                    </tr>
                ))}
            </tbody>
        </>
    )
}

export default CommentsList