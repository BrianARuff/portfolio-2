const animations = () => {
  return ({
    container: {
      hidden: {
        scale: 0,
        opacity: 0,
        x: "-100vw"
      },
      visible: {
        scale: 1,
        opacity: 1,
        x: 0
      },
      transition: {
        duration: 3,
        type: "spring",
        when: "afterChildren"
        
      }
    },
    header: {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      visible: {
        scale: 1,
        opacity: 1
      },
      transition: {
        delay: 0.5,
        type: "tween",
      }
    }
  })
}

export default animations