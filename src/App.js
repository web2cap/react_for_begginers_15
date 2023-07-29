import { useEffect, useState } from 'react';
import TopMenu from './TopMenu';
import DataTable from './DataTable';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/'

  const [tableData, setTableData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const parts = ['users', 'posts', 'comments']
  const [currentPart, setCurrentPart] = useState('users')
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${currentPart}`)
        if (!response.ok) throw Error("Did not receive expected data")
        const listItems = await response.json()
        setTableData(listItems)
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
  }, [currentPart])


  return (
    <div>
      <TopMenu
        parts={parts}
        currentPart={currentPart}
        setCurrentPart={setCurrentPart}
        setIsLoading={setIsLoading}
      />
      <main>

        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {isLoading && <p>Loading Data ...</p>}
        {!fetchError && !isLoading &&
          <DataTable
            currentPart={currentPart}
            tableData={tableData}

          />
        }
      </main>
    </div>
  );
}

export default App;
