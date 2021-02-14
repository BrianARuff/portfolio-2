import { Suspense } from "react"
import Loader from "./Loader"


const Image = ({src, alt, height, width, style, cssName, motion}) => {
  return (
    <Suspense fallback={<Loader />}>
      <img  className={cssName} style={style} src={src} alt={alt} height={height} width={width} />
    </Suspense>
    
  )
}

export default Image