import React from "react"
import "../styles/FlexLayout.scss"

type FLEXLAYOUT = {
  children: object
}

const FlexLayout = (props:FLEXLAYOUT) => (
    <div className={`flex-layout`}>
      {props.children}
    </div>
  )

export default FlexLayout