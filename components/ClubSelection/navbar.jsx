"use client"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import styled from "styled-components"
const MainCont = styled.div`
  .cs-navbar {
    position: fixed;
    width: 100vw;
    height: 70px;
    z-index: 9999;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
    opacity: collapse.5;
    transition: top 0.3s;
  }
  .cs-navbar-main {
    width: fit-content;
    padding: 14px 30px;
    display: flex;
    justify-content: space-around;
    background-color: #2b2b2b;
    gap: 50px;
    border-radius: 50px;
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    color: white;
  }
  .cs-navbar-main :nth-child(1) {
    color: white;
  }
  .cs-navbar.show {
    top: 0;
  }

  .cs-navbar.hide {
    top: -70px;
  }

  .check-status-link {
    cursor: pointer;
  }

  .status-form-container {
    margin-top: 10px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    color: white;
  }

  .status-form-container form {
    display: flex;
    flex-direction: column;
  }

  .status-form-container label {
    margin-bottom: 8px;
    font-family: "Poppins", sans-serif;
  }

  .status-form-container input {
    margin-bottom: 12px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: none;
    color: white;
  }

  .status-form-container button {
    padding: 10px;
    background-color: #4b4f53;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .status-form-container button:hover {
    background-color: #7a7b7b;
  }
`

const Navbar = () => {
  const notify = (e) => toast.error(e)
  const [scrollingDown, setScrollingDown] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [rollNo, setRollNo] = useState("")

  const formRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop

      if (currentScroll > lastScrollTop) {
        setScrollingDown(true)
      } else {
        setScrollingDown(false)
      }
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll)
    }

    const handleClickOutside = (event) => {
      if (
        formRef.current &&
        !formRef.current.contains(event.target) &&
        !event.target.closest(".check-status-link")
      ) {
        setIsFormVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousedown", handleClickOutside)
    }
  }, [lastScrollTop])

  const handleCheckStatusClick = () => {
    setIsFormVisible((prev) => !prev)
  }

  const handleRollNoChange = (e) => {
    setRollNo(e.target.value)
  }

  const handleCheckStatus = async (e) => {
    e.preventDefault()
    try {
      const link = "https://club-excel-backend.vercel.app"
      const res = await axios.get(`${link}/api/getuser/${rollNo}`)
      if (res.status === 200) {
        toast.success("Already registered")
        setRollNo("")
      }
    } catch (error) {
      notify("Not registered")
    }
  }

  return (
    <MainCont>
      <div className={`cs-navbar ${scrollingDown ? "hide" : "show"}`}>
        <div className="cs-navbar-main">
          <Link href="/">home</Link>
          <span
            onClick={handleCheckStatusClick}
            className="check-status-link"
          >
            check status
          </span>
        </div>
        {isFormVisible && (
          <div
            className="status-form-container"
            ref={formRef}
          >
            <form onSubmit={handleCheckStatus}>
              <label htmlFor="rollNo">Roll No:</label>
              <input
                type="text"
                id="rollNo"
                value={rollNo}
                onChange={handleRollNoChange}
                required
              />
              <button type="submit">Check</button>
            </form>
          </div>
        )}
      </div>
      <ToastContainer
        className="toast-position"
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </MainCont>
  )
}

export default Navbar
