import React, { useState } from "react"
import "./header.css"
import { HamburgerMenu } from "./HamburgerMenu"

export function Hamburger(props) {
  const [isHamburgerMenuOpened, setIsHamburgerMenuOpened] = useState(false)

  const toggleHamburgerMenu = () => {
    setIsHamburgerMenuOpened(!isHamburgerMenuOpened)
  }
  const activeClass = isHamburgerMenuOpened ? "active" : ""
  return (
    <>
      <div onClick={toggleHamburgerMenu} className={`hamburger ${activeClass}`}>
        <span className="ham-line" />
        <span className="ham-line" />
        <span className="ham-line" />
      </div>
      {isHamburgerMenuOpened && <HamburgerMenu />}
    </>
  )
}
