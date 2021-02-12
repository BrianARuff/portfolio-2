import "../styles/FlexLayout.scss"

const FlexLayout = (props) => {
  return (
    <div className={`flex-layout`}>
      {props.children}
    </div>
  )
}

export default FlexLayout