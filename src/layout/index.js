import React from "react"
import Header from "../component/Header"

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <div className="bg-white border-b top-0 border-slate-100 z-10">
          <Header />
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
