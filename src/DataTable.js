import UsersList from "./UsersList"

const DataTable = ({ currentPart, tableData }) => {
    console.log(tableData)
    return (
        <table>
            {currentPart === 'users' && <UsersList tableData={tableData} />}
        </table>
    )
}

export default DataTable