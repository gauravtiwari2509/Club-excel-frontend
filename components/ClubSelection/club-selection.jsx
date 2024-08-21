"use client"
import React, { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import styled from "styled-components"
import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"
const MainCont = styled.div`
  .cs-homepage {
    background-color: black;
    margin-bottom: -500px;
  }
  .Main-modal {
    color: black;
    background-color: #242426;
  }
  .cs-banner {
    width: screen;
    height: 100vh;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    overflow-x: hidden;
    position: relative;
    background: url("/bg1.svg");
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0px 10px 100px rgb(10, 10, 10);
  }

  .cs-title {
    color: rgba(214, 214, 214, 0.962);
    font-weight: 600;
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: fit-content;
    text-align: center;
  }
  .cs-title :nth-child(1) {
    animation: drop 1s ease-out forwards;
  }
  .cs-title :nth-child(2) {
    animation: dropUp 1s ease-out forwards, fadeInOut 3s ease-in-out infinite;
  }

  @keyframes fadeInOut {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }
  @keyframes drop {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes dropUp {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .club-form {
    max-width: 80%;
    margin: 200px auto;
    padding: 50px 20px;
    color: #afacac;
    border-radius: 10px;
    background-color: #090909;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 50px;
    box-shadow: 10px 10px 50px rgb(33, 33, 33);
    font-size: 22px;
    font-family: "Poppins", sans-serif;
  }

  .cs-form-group {
    flex: 1 1 calc(50% - 20px);
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    gap: 8px;
  }

  .form-label {
    font-weight: bold;
    color: rgb(211, 211, 211);
  }

  .form-input,
  .form-select,
  .form-textarea {
    width: 100%;
    padding: 10px 16px;
    border: none;
    border-bottom: 2px solid #a8a7a7;
    background: rgb(19, 19, 19);
    color: #eaeaea;
    font-size: 22px;
  }

  .form-input:hover,
  .form-textarea:hover,
  .form-input:focus,
  .form-textarea:focus {
    border-color: #a5a8ab;
    background-color: #181818;
  }

  .form-button {
    background-color: #3f3f3f;
    color: white;
    border: none;
    padding: 12px 30px;
    font-size: 18px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    max-width: fit-content;
    grid-column: 2/3;
  }

  .form-button:hover {
    background-color: #272626;
  }

  .form-textarea {
    height: 120px;
    resize: vertical;
  }

  .cs-achivement {
    width: 100%;
    font-family: "Poppins", sans-serif;
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 30px;
  }
  .cs-achivement-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    color: rgba(214, 214, 214, 0.962);
    gap: 10px;
  }
  .cs-achivement-data :nth-child(1) {
    font-size: 40px;
    font-weight: 600;
    animation: fadeInOut 2s ease-in-out infinite;
  }

  footer {
    color: white;
    font-family: "Poppins";
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -100px;
  }

  @media (max-width: 768px) {
    .cs-form-group {
      flex: 1 1 100%;
    }
    .form-input {
      font-size: 16px;
    }
    .club-form {
      gap: 10px;
      font-size: 18px;
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 50px;
    }
    .form-button {
      grid-column: 1/2;
      justify-self: center;
    }
    .cs-banner {
      height: 100vh;
      padding-bottom: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 200px;
      position: relative;
      padding: 20px;
    }
    .cs-title {
      font-weight: 550;
      font-size: 20px;
      text-align: center;
      position: absolute;
      top: 30vh;
    }
    .cs-title :nth-child(2) {
      animation: dropUp 1s ease-out forwards;
      color: rgb(144, 144, 144);
    }
    .cs-achivement {
      display: flex;
      flex-direction: column;
      gap: 50px;
      position: absolute;
      bottom: 30px;
    }
    .cs-achivement-data {
      font-size: 24px;
    }
    .form-textarea {
      font-size: 16px;
    }
  }
`
const ClubSelection = () => {
  const [open, setOpen] = useState(false)
  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)
  const notify = (e) => toast.error(e)
  const notifysuccess = () => toast.success("yeeh! Registration Successs.")
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    regNo: "",
    nistEmail: "",
    personalEmail: "",
    gender: "",
    branch: "",
    hackerrankId: "",
    techStacks: "",
    mobile: "",
    hostelLocal: "",
    reason: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.nistEmail.includes("nist.edu")) {
      alert("Enter a valid NIST email ID")
      return
    }

    try {
      const response = await axios.post(
        `https://club-excel-backend.vercel.app/api/register`,
        formData
      )

      if (response.status === 201) {
        toast.success("yeeh! Registration Successs.")
        onOpenModal()
        setFormData({
          name: "",
          rollNo: "",
          regNo: "",
          nistEmail: "",
          personalEmail: "",
          gender: "",
          branch: "",
          hackerrankId: "",
          techStacks: "",
          mobile: "",
          hostelLocal: "",
          reason: "",
        })
      } else {
        notify("Failed to submit the form.")
      }
    } catch (error) {
      if (error.response) {
        console.error(
          "Error occurred while submitting the form:",
          error.response.data
        )
        notify(
          error.response.data.error || "An error occurred. Please try again."
        )
      } else if (error.request) {
        console.error(
          "Error occurred while submitting the form:",
          error.request
        )
        notify("No response received from the server. Please try again.")
      } else {
        console.error(
          "Error occurred while submitting the form:",
          error.message
        )
        notify("An error occurred. Please try again.")
      }
    }
  }

  return (
    <MainCont>
      <div className="cs-homepage">
        <div className="cs-banner">
          <div className="cs-title">
            <span>STEP INTO THE WORLD OF EXCEL</span>
            <span>DARE TO MATCH THE PACE OF EXCELITES</span>
          </div>
          <div className="cs-achivement">
            <div className="cs-achivement-data">
              <span>&gt;95%</span>
              <span>PLACEMENT</span>
            </div>
            <div className="cs-achivement-data">
              <span>40 LPA</span>
              <span>HIGHEST PACKAGE</span>
            </div>
            <div className="cs-achivement-data">
              <span>MULTI</span>
              <span>DOMAIN CLUB</span>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="club-form"
        >
          <div className="cs-form-group">
            <label
              htmlFor="name"
              className="form-label"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="cs-form-group">
            <label
              htmlFor="rollNo"
              className="form-label"
            >
              Roll No:
            </label>
            <input
              type="text"
              id="rollNo"
              name="rollNo"
              className="form-input"
              value={formData.rollNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="cs-form-group">
            <label
              htmlFor="regNo"
              className="form-label"
            >
              Reg. No:
            </label>
            <input
              type="text"
              id="regNo"
              name="regNo"
              className="form-input"
              value={formData.regNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="cs-form-group">
            <label
              htmlFor="nistEmail"
              className="form-label"
            >
              NIST Email:
            </label>
            <input
              type="email"
              id="nistEmail"
              name="nistEmail"
              className="form-input"
              value={formData.nistEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="cs-form-group">
            <label
              htmlFor="personalEmail"
              className="form-label"
            >
              Personal Email:
            </label>
            <input
              type="email"
              id="personalEmail"
              name="personalEmail"
              className="form-input"
              value={formData.personalEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="cs-form-group">
            <label
              htmlFor="gender"
              className="form-label"
            >
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              className="form-select"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option
                value=""
                disabled
              >
                select options
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">others</option>
            </select>
          </div>
          <div className="cs-form-group">
            <label
              htmlFor="branch"
              className="form-label"
            >
              Branch:
            </label>
            <input
              type="text"
              id="branch"
              name="branch"
              className="form-input"
              value={formData.branch}
              onChange={handleChange}
              required
            />
          </div>
          <div className="cs-form-group">
            <label
              htmlFor="hackerrankId"
              className="form-label"
            >
              HackerRank ID:
            </label>
            <input
              type="text"
              id="hackerrankId"
              name="hackerrankId"
              className="form-input"
              value={formData.hackerrankId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="cs-form-group">
            <label
              htmlFor="techStacks"
              className="form-label"
            >
              Tech Stacks/Skills:
            </label>
            <input
              type="text"
              id="techStacks"
              name="techStacks"
              className="form-input"
              value={formData.techStacks}
              onChange={handleChange}
              required
            />
          </div>
          <div className="cs-form-group">
            <label
              htmlFor="mobile"
              className="form-label"
            >
              Phone no:
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              className="form-input"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="cs-form-group">
            <label
              htmlFor="hostelLocal"
              className="form-label"
            >
              Hostelite/Localite:
            </label>
            <select
              id="hostelLocal"
              name="hostelLocal"
              className="form-select"
              value={formData.hostelLocal}
              onChange={handleChange}
              required
            >
              <option
                value=""
                disabled
              >
                Select options
              </option>
              <option value="hostelite">Hostelite</option>
              <option value="localite">Localite</option>
            </select>
          </div>
          <div className="cs-form-group">
            <label
              htmlFor="reason"
              className="form-label"
            >
              Why do you want to join Club Excel?
            </label>
            <textarea
              id="reason"
              name="reason"
              className="form-textarea"
              value={formData.reason}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="form-button"
          >
            REGISTER
          </button>
        </form>
        <footer>
          <span> 2023 © Club Excel - ALL RIGHTS RESERVED </span>
        </footer>
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
      >
        <div
          className="Main-modal"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 370,
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          <div
            className="Thank-msg"
            style={{
              color: "skyblue",
              marginTop: 5,
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
          >
            Thank you for completing your registration for Club Excel!
          </div>
          <div
            className="req-msg"
            style={{
              color: "purple",
              marginTop: 15,
              lineHeight: 1.5,
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
          >
            We invite you to join our WhatsApp group to receive additional
            information and stay updated on upcoming events and activities.
          </div>
          <div
            className="Link-msg"
            onClick={() =>
              window.open("https://chat.whatsapp.com/JUyXrgdjJcoG0kILoS1Ix6")
            }
            style={{
              color: "violet",
              marginTop: 25,
              fontFamily: "Montserrat",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            https://chat.whatsapp.com/
            <br />
            JUyXrgdjJcoG0kILoS1Ix6
          </div>
        </div>
      </Modal>
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

export default ClubSelection
