import { useEffect, useState } from "react"
import ErrorBoundary from "../components/ErrorBoundary"
import "../styles/Projects.scss"

const Projects = () => {
  let [reposState, setReposState] = useState([]);
  useEffect(() => {
    const fetchRepos = async () =>{
      const repos = await(await (fetch("https://gh-pinned-repos-5l2i19um3.vercel.app/?username=brianaruff"))).json()
      setReposState(repos)
    }
    fetchRepos()
  }, [])

  return (
    <ul className={`projects-list`}>
      <ErrorBoundary >
        {
          reposState.map(({link, repo:name}, index) => {
            return (
              <li className={`projects-list-item`} key={Math.random(index) * 100 * Math.random(Date.now()) * 100}>
                <a target="_blank" rel="noreferrer" href={link}>{name}</a>
              </li>
            )
          })
        }
        </ErrorBoundary>
    </ul>
  )
}

export default Projects
