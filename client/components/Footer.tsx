import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Link to="/orders">Orders</Link>
      <Link to="/returns">Returns</Link>
      <Link to="/help">Help</Link>
    </footer>
  );
}

export default Footer;