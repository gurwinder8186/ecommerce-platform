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
        <Footer />
      </div>
    </BrowserRouter>
    
  )
}

export default App
