import{ FunctionComponent, useState, useEffect, lazy, Suspense } from "react";
import * as React from "react";
import "../styles/Projects.scss"
import useGetRepos from "../components/getRepos"
import Loader from "../components/Loader";

const Projects: FunctionComponent = () => {

  return (
    <div className={`projects`}>
      <div className={`projects-websites`}>
      </div>
      <div className={`projects-repos`}>
        <h3>Pinned Github Repositories</h3>
        
        {
          useGetRepos().map(({link, owner, repo}) => {
            return (
              <Suspense fallback={<Loader/>} key={link}>
                <li ><a href={link}>{repo}</a></li>
              </Suspense>
            )
          })
        }
      </div>
      <div className={`projects-packages`}></div>
    </div>
  )
}

export default Projects