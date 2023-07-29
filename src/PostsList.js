const PostsList = ({ tableData }) => {
    console.log(JSON.stringify(tableData))
    return (
        <>
            <thead>
                <tr>
                    <td>id</td>
                    <td>title</td>
                    <td>userId</td>
                    <td>body</td>
                </tr>
            </thead>
            <tbody>
                {tableData.map((tableRow) => (
                    <tr key={tableRow.id}>
                        <td>{tableRow.id}</td>
                        <td>{tableRow.title}</td>
                        <td>{tableRow.userId}</td>
                        <td>{tableRow.body}</td>

                    </tr>
                ))}
            </tbody>
        </>
    )
}

export default PostsList