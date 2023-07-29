import { useState } from 'react';
import TopMenu from './TopMenu';
import Users from './Users';
import Posts from './Posts';
import Comments from './Comments';

function App() {
  const [part, setPart] = useState('users')
  const [fetchError, setFetchError] = useState(null)

  return (
    <div>
      <TopMenu
        part={part}
        setPart={setPart}
      />
      <main>

        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError &&
          part === 'users' && <Users
            setFetchError={setFetchError}
          />
        }
        {!fetchError && part === 'posts' && <Posts />}
        {!fetchError && part === 'comments' && <Comments />}
      </main>
    </div>
  );
}

export default App;
