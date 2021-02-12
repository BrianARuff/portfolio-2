import "../styles/Spinner.scss"

const Loader = (props) => {
  return (
    <span className="loader">{props.children}</span>
  )
}

export default Loader