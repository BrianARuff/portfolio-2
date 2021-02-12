import "../styles/Header.scss"
import imageOfMe from "../images/brian-72x72.jpg";
import { Link } from "react-router-dom"

const Header = (props) => {
  return (
    <header className={`header`}>
      <ul className={`header-flex-box`}>
        <li><img src={imageOfMe} alt=""/></li>
        <li><Link className="text-off-white" to={`/about-me`}>About Me</Link></li>
        <li><Link className="text-off-white" to={`/projects`}>Projects</Link></li>
        <li><Link className="text-off-white" to={`/resume`}>Resum&eacute;</Link></li>
      </ul>

    </header>
  )
}

export default Header