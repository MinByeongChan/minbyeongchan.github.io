import React from "react"

const Footer = () => {
  return (
    <footer className="my-12 text-center">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> and{" "}
      <a
        href="https://github.com/minbyeongchan"
        target="_blank"
        rel="noreferrer"
      >
        Byeong Chan
      </a>
      .
    </footer>
  )
}

export default Footer
