import "../styles/Header.scss"
import imageOfPeach from "../images/peach-192x192.png"
import imageOfMe from "../images/brian-72x72.jpg"
import { Link } from "react-router-dom"

const Header = (props) => {
  return (
    <header>
      <ul className={`header-flex-box`}>
        <li className={`gi-1`}><Link to={`/`}><img className={`pic-of-peach`} src={imageOfPeach} alt="peach"/><img className={`pic-of-me`} src={imageOfMe} alt="pic of brian"/></Link></li>
        <li className={`gi-2`}><Link className="text-off-white" to={`/about-me`}>About</Link></li>
        <li className={`gi-3`}><Link className="text-off-white" to={`/projects`}>Projects</Link></li>
        <li className={`gi-4`}><Link className="text-off-white" to={`/resume`}>Resum&eacute;</Link></li>
        <li className={`gi-5`}><a href="https://github.com/brianaruff" target="_blank" rel="noreferrer">GitHub</a></li>
      </ul>

    </header>
  )
}

export default Header