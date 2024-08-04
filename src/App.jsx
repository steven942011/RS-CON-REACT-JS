import { useState } from 'react';
import viteLogo from '/vite.svg';
import { Header } from './components/layout/public/Header';
import {Routing} from  './router/Routing';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='layout'>
       
       <Routing />

    </div>
  )
}

export default App
