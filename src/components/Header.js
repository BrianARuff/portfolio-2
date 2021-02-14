import "../styles/Header.scss"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"


const Header = (props) => (
    <header>
      <motion.ul animate={{
                scale: [0, 1],
                opacity: [0, 1]}} className={`header-flex-box`}> 
        <li ><Link className="text-off-white" to={`/`}>Home</Link></li>
        <li><Link className="text-off-white" to={`/projects`}>Projects</Link></li>
        <li><Link className="text-off-white" to={`/resume`}>Resumé</Link></li>
        <li><a href="https://github.com/brianaruff" target="_blank" rel="noreferrer">GitHub</a></li>
      </motion.ul>
    </header>
  )


export default Header