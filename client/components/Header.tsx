import { Link } from 'react-router-dom'

function Header() {
  
  return(
  <header>
    <Link to="/categories">
        <h1>SINGH&apos;S TECH</h1>
      </Link>
    <div>
      <input type="text" placeholder='Search' />
      <button> 🔍</button>
    </div>
    <div className='link-container'>
      <Link to="/register"> Register </Link>
      <Link to="/login"> Login </Link>
      <Link to="/admin">Admin</Link>
      <Link to="/cart"> Cart </Link>

    </div>
  </header>

)}
export default Header