import { Link } from "react-router-dom"
import './style/Navbar.css'

export const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/products'>User Detail</Link>
        </nav>
    </div>
  )
}
