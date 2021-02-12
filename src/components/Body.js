import "../styles/Body.scss"
import me from "../images/me-150x150.jpg"

const Body = (props) => {
  return (
    <article className={`main-body`}>
       <h2 className={`main-body-title`}>Welcome to Brian's portfolio!</h2>
      <div className="peach">
        <img className={`pic-of-me`} src={me} alt="pic of me"/>
      </div>
    </article>
  )
}

export default Body