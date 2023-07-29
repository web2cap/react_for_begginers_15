import UsersList from "./UsersList"
import PostsList from "./PostsList"
import CommentsList from "./CommentsList"


const DataTable = ({ currentPart, tableData }) => {
    console.log(tableData)
    return (
        <table>
            {currentPart === 'users' && <UsersList tableData={tableData} />}
            {currentPart === 'posts' && <PostsList tableData={tableData} />}
            {currentPart === 'comments' && <CommentsList tableData={tableData} />}
        </table>
    )
}

export default DataTable