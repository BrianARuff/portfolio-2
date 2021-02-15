import "../styles/Home.scss"
import me from "../images/me-150x150.jpg"
import React, { Suspense } from "react"
import Loader from "../components/Loader"
import Image from "../components/Image"
import { motion } from "framer-motion"

const Home = ({animation, handleSetAnimationState}) =>
   (
    <>
      <Suspense fallback={<Loader />}>
        <article initial="hidden"
            animate="visible"
            variants={animation.container} className={`container first-body-article`}>
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={animation.header} 
            className={`first-body-article-title`}>Welcome to Brian's portfolio!
          </motion.h2>
          <motion.div animate={{
            scale: [0, 1],
            rotate: [0, 360],
            borderRadius: `50%`,
            opacity: [0, 1]
          }}>
            <Image motion={true} cssName={`pic-of-me`}  src={me} height={`150px`} width={`150px`} alt={`Picture of me`} />
          </motion.div>
        </article>
      </Suspense>

      <Suspense fallback={<Loader />}>

      </Suspense>

      <Suspense fallback={<Loader />}>
        <article className={`second-home-article`}>
          <div className={`icons`}>
            <Suspense fallback={<Loader />}>
              <motion.div animate={{
                scale: [0, 1],
                rotate: [0, 360],
                opacity: [0, 1]
              }} className={`html`}></motion.div>
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
                scale: [0, 1],
                rotate: [0, 360],
                opacity: [0, 1]}} className={`react`}></motion.div>
            </Suspense>
            <Suspense fallback={<Loader />}>
              <motion.div animate={{
                scale: [0, 1],
                rotate: [0, 360],
                opacity: [0, 1]}} className={`node`}></motion.div>
            </Suspense>
            <Suspense fallback={<Loader />}>
              <motion.div animate={{
                scale: [0, 1],
                rotate: [0, 360],
                opacity: [0, 1]}} className={`angularjs`}></motion.div>
            </Suspense>
          </div>
        </article>
      </Suspense>
    </>
  )


export default Home