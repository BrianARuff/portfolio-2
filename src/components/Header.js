import "../styles/Header.scss"
import { Link } from "react-router-dom"

const Header = (props) => (
    <header>
      <ul className={`header-flex-box`}> 
        <li><Link className="text-off-white" to={`/`}>Home</Link></li>
        <li><Link className="text-off-white" to={`/projects`}>Projects</Link></li>
        <li><Link className="text-off-white" to={`/resume`}>Resumé</Link></li>
        <li><a href="https://github.com/brianaruff" target="_blank" rel="noreferrer">GitHub</a></li>
      </ul>
    </header>
  )


export default Header