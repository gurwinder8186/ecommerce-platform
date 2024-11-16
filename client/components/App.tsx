// import { useFruits } from '../hooks/useFruits.ts'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header.tsx'

function App() {

  return (
    <BrowserRouter>
        <div className="app">
        <Header />
        {/* <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul> */}
      </div>
    </BrowserRouter>
    
  )
}

export default App
