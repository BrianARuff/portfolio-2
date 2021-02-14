const Image = ({src, alt, height, width, style, cssName}) => {
  return (
    <img className={cssName} style={style} src={src} alt={alt} height={height} width={width} />
  )
}

export default Image