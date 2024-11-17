import { BrowserRouter } from 'react-router-dom'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import Categories from './Categories.tsx'

function App() {
  console.log(" app component rendred");
  

  return (
    <BrowserRouter>
        <div className="app">
        <Header />
        <Categories />
        <Footer />
      </div>
    </BrowserRouter>
    
  )
}

export default App
