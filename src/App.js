import { useState } from 'react';
import TopMenu from './TopMenu';

function App() {
  const [part, setPart] = useState('users')

  return (
    <div>
      <TopMenu
        part={part}
        setPart={setPart}
      />
    </div>
  );
}

export default App;
