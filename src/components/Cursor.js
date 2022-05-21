import React, { useContext, useEffect, useState } from "react"
import { motion } from "framer-motion"

import { cursorContext } from "./../contexts/cursorContext"

function Cursor() {
  const { cursorType } = useContext(cursorContext)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    document.addEventListener("mousemove", e =>
      setCursorPosition({ x: e.clientX, y: e.clientY })
    )
    return () => {
      document.addEventListener("mousemove", e =>
        setCursorPosition({ x: e.clientX, y: e.clientY })
      )
    }
  }, [])

  return (
    <>
      <motion.div
        className={`cursor cursor--lg ${cursorType}`}
        animate={{
          x: cursorPosition.x,
          y: cursorPosition.y,
          transition: {
            duration: 0.02,
            ease: [0.6, 0.01, -0.05, 0.95],
            type: "tween",
          },
        }}
      ></motion.div>
      <motion.div
        className={`cursor cursor--sm ${cursorType}`}
        animate={{
          x: cursorPosition.x,
          y: cursorPosition.y,
          transition: {
            type: "spring",
          },
        }}
      ></motion.div>
    </>
  )
}

export default Cursor
