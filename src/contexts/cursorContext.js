import React, { createContext, useState } from "react"

export const cursorContext = createContext({
  cusorType: "",
  cursorChangeHandler: () => {},
})

function CursorContextProvider({ children }) {
  const [cursorType, setCursorType] = useState("")

  const cursorChangeHandler = cursorType => {
    setCursorType(cursorType)
  }

  return (
    <cursorContext.Provider
      value={{
        cursorType,
        cursorChangeHandler,
      }}
    >
      {children}
    </cursorContext.Provider>
  )
}

export default CursorContextProvider
