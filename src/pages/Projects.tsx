import{ FunctionComponent, useState, useEffect } from "react";
import * as React from "react";
import axios from "axios"
import "../styles/Projects.scss"

type Repo = {
  owner: string,
  repo: string,
  link: string,
}

const Projects: FunctionComponent = () => {

  const [pinnedRepos, setPinnedRepos] = useState<Repo[]>([]);
  useEffect(() => {
    axios.get("https://gh-pinned-repos-5l2i19um3.vercel.app/?username=brianaruff")
      .then(res => {
        setPinnedRepos(res.data);
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <div className={`projects`}>
      <div className={`projects-websites`}>
      </div>
      <div className={`projects-repos`}>
        <h3>Pinned Github Repositories</h3>
        {
          pinnedRepos.map(({link, owner, repo}) => {
            return (
              <li key={Math.random()}><a href={link}>{repo}</a></li>
            )
          })
        }
      </div>
      <div className={`projects-packages`}></div>
    </div>
  )
}

export default Projects