const animations = () => {
  return ({

    headerItem: {
      hidden: {
        scale: 0,
        opacity: 0
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1.5,
          type: "spring"
        }
      },
      hover: {
        scale: 1.1,
        transition: {
          yoyo: Infinity
        }
      },
      
      tap: {
        scale: 1.1,
        transition: {
          yoyo: Infinity
        }
      }
    },

    bodyHeader: {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1,
          type: "spring"
        }
      },
      
    },

    imageLeft: {
      hidden: {
        x: `-100vw`
      },
      visible: {
        x: 0,
        transition: {
          type: "spring"
        }
      }
    },

    imageRight: {
      hidden: {
        x: `100vw`,
      },
      visible: {
        x: 0,
        transition: {
          type: "spring"
        }
      }
    },

    imageOfMe: {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1,
          type: "spring",
        }
      },
      hover: {
        scale: 1.1,
      },
      tap: {
        scale: 1.1,

      }
    }
  })
}

export default animations()