import "../styles/Home.scss"
import me from "../images/me-150x150.jpg"
import React, { Suspense } from "react"
import Loader from "../components/Loader"
import { motion } from "framer-motion"

const Home = ({bodyHeader, imageOfMe, imageLeft, imageRight}) => {
  return (
      <>
        <Suspense fallback={<Loader />}>
          <article
              className={`container first-body-article`}>
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={bodyHeader} 
              className={`first-body-article-title`}>Welcome to Brian's portfolio!
            </motion.h2>
              <motion.img 
                initial="hidden"
                animate="visible"
                variants={imageOfMe} 
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
        </Suspense>
  
        <Suspense fallback={<Loader />}>
          <h3>Under Development</h3>
        </Suspense>
  
        <Suspense fallback={<Loader />}>
          <motion.article 
            initial="hidden"
            animate="visible" 
            className={`second-home-article`}
          >
            <div className={`icons`}>
              <Suspense fallback={<Loader />}>
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={imageLeft} 
                  className={`html`}>
                </motion.div>
              </Suspense>
              <Suspense fallback={<Loader />}>
                <motion.div animate={{
                  scale: [0, 1],
                  rotate: [0, 360],
                  opacity: [0, 1]}} className={`css`}></motion.div>
              </Suspense>
              <Suspense fallback={<Loader />}>
                <motion.div animate={{
                  scale: [0, 1],
                  rotate: [0, 360],
                  opacity: [0, 1]}} className={`js`}></motion.div>
              </Suspense>
              <Suspense fallback={<Loader />}>
                <motion.div animate={{
                  scale: 1,
                  rotate: [0, 360],
                  opacity: 1
                }}
                  transition={{repeat: Infinity, duration: 4, ease: "linear"}} className={`react`}></motion.div>
              </Suspense>
              <Suspense fallback={<Loader />}>
                <motion.div animate={{
                  scale: [0, 1],
                  rotate: [0, 360],
                  opacity: [0, 1]}} className={`node`}></motion.div>
              </Suspense>
              <Suspense fallback={<Loader />}>
                <motion.div 
                  animate={{
                    scale: [0, 1],
                    rotate: [0, 360],
                    opacity: [0, 1]}}
                  className={`angularjs`}></motion.div>
              </Suspense>
              <Suspense fallback={<Loader />}>
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={imageRight}
                  className={`framer`}></motion.div>
              </Suspense>
            </div>
          </motion.article>
        </Suspense>
      </>
  )
}


export default Home