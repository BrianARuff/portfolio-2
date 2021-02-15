const Projects = ({repos}) => {
  return (
    <ul>
      {
        repos.map(repo => {
          return (
            <li>
              <a target="_blank" rel="noreferrer" href={repo.link}>{repo.repo}</a>
            </li>
          )
        })
      }
    </ul>
  )
}
  // console.log("repos", repos))

export default Projects