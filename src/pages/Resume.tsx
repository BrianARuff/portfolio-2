import React, { FunctionComponent } from "react"
import resume from "../data/Ruff, Brian - 2-12-20 - Resume.docx"

const Resume: FunctionComponent = () => {
  return (
     <iframe style={{width: '100%', height: '90vh'}} src="https://docs.google.com/document/d/e/2PACX-1vSPXmZSE9Mac6bH7Z2XijyCLf5HCd_SG6lFtf37QJpIHY0ba0ezFtaxBOvTSmmH-fP1Py5qHYrKD7x8/pub?embedded=true"></iframe>
  )
}

export default Resume