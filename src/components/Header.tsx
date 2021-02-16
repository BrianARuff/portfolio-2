import * as React from "react"
import "../styles/Header.scss"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

type HEADER = {
  animations: {
    headerItem: {}
  }
}

const Header = ({animations}:HEADER) => {
  console.log('%cHeader.tsx line:12 props', 'color: #007acc;', animations);
  return (
    <header>
      <ul className={`header-flex-box`}> 
        <motion.li
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          variants={animations.headerItem}
        >
          <Link className="text-off-white" to={`/`}>Home</Link>
        </motion.li>
        
        <motion.li 
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          variants={animations.headerItem}
        >
          <Link className="text-off-white" to={`/projects`}>Projects</Link>
        </motion.li>
        
        <motion.li
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          variants={animations.headerItem}
        >
          <Link className="text-off-white" to={`/resume`}>Resumé</Link>
        </motion.li>
        
        <motion.li
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          variants={animations.headerItem}
        >
          <a href="https://github.com/brianaruff" target="_blank" rel="noreferrer">GitHub</a>
        </motion.li>
      </ul>
    </header>
  )
}


export default Header