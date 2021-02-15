import "../styles/Header.scss"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"


const Header = ({headerItem}) => {
  
  return (
    <header>
      <ul className={`header-flex-box`}> 
        <motion.li
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          variants={headerItem}
        >
          <Link className="text-off-white" to={`/`}>Home</Link>
        </motion.li>
        
        <motion.li 
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          variants={headerItem}
        >
          <Link className="text-off-white" to={`/projects`}>Projects</Link>
        </motion.li>
        
        <motion.li
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          variants={headerItem}
        >
          <Link className="text-off-white" to={`/resume`}>Resumé</Link>
        </motion.li>
        
        <motion.li
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          variants={headerItem}
        >
          <a href="https://github.com/brianaruff" target="_blank" rel="noreferrer">GitHub</a>
        </motion.li>
      </ul>
    </header>
  )
}


export default Header