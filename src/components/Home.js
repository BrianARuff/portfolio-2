import "../styles/Home.scss"
import me from "../images/me-150x150.jpg"

const Home = (props) => {
  return (
    <>
      <article className={`main-body`}>
        <h2 className={`main-body-title`}>Welcome to Brian's portfolio!</h2>
        <div className="peach">
          <img className={`pic-of-me`} src={me} alt="pic of me"/>
        </div>
      </article>
      <article className={`icons`}>
        <div className={`essentials`}></div>
      </article>
    </>
  )
}

export default Home