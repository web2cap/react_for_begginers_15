const TopMenu = ({ part, setPart }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <button
                className={part === 'users' ? 'selected' : ''}
                onClick={(e) => setPart('users')}
            >
                users
            </button>
            <button
                className={part === 'posts' ? 'selected' : ''}
                onClick={(e) => setPart('posts')}
            >
                posts
            </button>
            <button
                className={part === 'comments' ? 'selected' : ''}
                onClick={(e) => setPart('comments')}
            >
                comments
            </button>
        </form>
    )
}

export default TopMenu