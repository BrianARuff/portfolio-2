import "../styles/Home.scss"
import me from "../images/me-150x150.jpg"
import React, { Suspense } from "react";
import Loader from "../components/Loader"
const Image = React.lazy(() => import("../components/Image"));


const Home = (props) => 
   (
    <>
      <Suspense fallback={Loader}>
        <article className={`main-body`}>
          <h2 className={`main-body-title`}>Welcome to Brian's portfolio!</h2>
          <Suspense fallback={Loader}>
            <Image cssName={`pic-of-me`}  src={me} height={`150px`} width={`150px`} alt={`Picture of me`} />
          </Suspense>
        </article>
      </Suspense>
      <Suspense fallback={Loader}>
        <article>
          <h3 className={`tech-list-header`}>Technologies</h3>
          <div className={`icons`}>
            <div className={`html`}></div>
            <div className={`css`}></div>
            <div className={`js`}></div>
            <div className={`react`}></div>
            <div className={`node`}></div>
            <div className={`angularjs`}></div>
          </div>
        </article>
      </Suspense>
    </>
  )

export default Home