import { Link } from 'react-router-dom'

function Header() {
  
  return(
  <header>
    <h1> SINGH&apos;S TECH</h1>
    <div>
      <input type="text" placeholder='Search' />
      <button> 🔍</button>
    </div>
    <div className='link-container'>
      <Link to="/shop"> ShopNow </Link>
      <Link to="/register"> Register </Link>
      <Link to="/login"> Login </Link>
      <Link to="/cart"> Cart </Link>
    </div>
  </header>

)}
export default Header