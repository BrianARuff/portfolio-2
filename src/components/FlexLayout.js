import "../styles/FlexLayout.scss"

const FlexLayout = (props) => (
    <div className={`flex-layout`}>
      {props.children}
    </div>
  )

export default FlexLayout