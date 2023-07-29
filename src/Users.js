import { useEffect, useState } from 'react'

import UsersList from './UsersList'

const Users = ({ setFetchError }) => {
    const USER_URL = 'https://jsonplaceholder.typicode.com/users'
    const [usersList, setUsersList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(USER_URL)
                if (!response.ok) throw Error("Did not receive expected data")
                const listItems = await response.json()
                setUsersList(listItems)
                setFetchError(null)
            } catch (err) {
                setFetchError(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        setTimeout(() => {
            (async () => await fetchItems())()
        }, 2000)
    }, [])

    return (
        <>
            {isLoading && <p>Loading Users ...</p>}
            {!isLoading && <UsersList
                usersList={usersList}
            />
            }
        </>
    )
}

export default Users

//{isLoading && <p>Loading Items ...</p>}