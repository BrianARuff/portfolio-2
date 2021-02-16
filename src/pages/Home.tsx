import "../styles/Home.scss"
import { motion } from "framer-motion"
import me from "../images/me-150x150.jpg"

type HEADER = {
  animations: {
    bodyHeader: {},
    imageOfMe: {},
    imageLeft: {},
    imageRight: {}
  }
}

const Home = ({animations}:HEADER) => {
  return (
      <>
          <article
              className={`container first-body-article`}>
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={animations.bodyHeader} 
              className={`first-body-article-title`}>Welcome to Brian's portfolio!
            </motion.h2>
              <motion.img 
                initial="hidden"
                animate="visible"
                variants={animations.imageOfMe} 
                whileHover="hover"
                whileTap="tap"
                height="300px" 
                width="300px" 
                src={me} 
                alt="pic of me" 
                className={`pic-of-me`}
              >
              </motion.img>
          </article>

          <div>
            <h3>Under Development</h3>
            <motion.div 
              animate={{
                scale: 1,
                rotate: [0, 360],
                opacity: 1
              }}
              transition={{repeat: Infinity, duration: 3, ease: "linear"}} className={`react`}>
            </motion.div>
          </div>
  
          <motion.article 
            initial="hidden"
            animate="visible" 
            className={`second-home-article`}
          >
            <div className={`icons`}>
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={animations.imageLeft} 
                className={`html`}>
              </motion.div>
              <motion.div animate={{
                scale: [0, 1],
                rotate: [0, 360],
                opacity: [0, 1]}} className={`css`}></motion.div>
              <motion.div animate={{
                scale: [0, 1],
                rotate: [0, 360],
                opacity: [0, 1]}} className={`js`}></motion.div>
              <motion.div animate={{
                scale: 1,
                rotate: [0, 360],
                opacity: 1
              }} className={`ts`}></motion.div>
              <motion.div animate={{
                scale: [0, 1],
                rotate: [0, 360],
                opacity: [0, 1]}} className={`node`}></motion.div>
              <motion.div 
                animate={{
                  scale: [0, 1],
                  rotate: [0, 360],
                  opacity: [0, 1]}}
                className={`angularjs`}></motion.div>
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={animations.imageRight}
                className={`framer`}></motion.div>
            </div>
          </motion.article>
      </>
  )
}


export default Home