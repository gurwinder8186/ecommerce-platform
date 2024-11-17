// import { useFruits } from '../hooks/useFruits.ts'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header.tsx'
import Sidebar from './Sidebar.tsx'
import Footer from './Footer.tsx'

function App() {

  return (
    <BrowserRouter>
        <div className="app">
        <Header />
        <Sidebar />
        {/* <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul> */}
        <Footer />
      </div>
    </BrowserRouter>
    
  )
}

export default App
