import React from "react"
import styled from "styled-components"
import Image from "next/image"
const MainCont = styled.div`
  margin: 100px;

  .card {
    width: 100%;
    max-width: 300px; /* Set a maximum width for cards */
    border: 1px solid #ccc;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    transition: transform 0.3s ease-in-out;
  }

  .card.open {
    transform: scale(1.1);
    z-index: 1;
  }

  img {
    width: 100%;
    border-radius: 5px;
  }

  .details {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .name {
    color: #ccc;
  }
`

function Navbar() {
  return (
    <MainCont>
      <div className="card">
        <Image
          src={"/Excel_Logo_Anim.gif"}
          alt="Logo"
          height={426}
          width={490}
        />

        <h3 className="name">name</h3>
        <p className="name">description</p>
        {/* <button onClick={toggleDetails}>Show Details</button>
        {isDetailsOpen && <div className="details">{details}</div>} */}
      </div>
      <div className="card">
        <Image
          src={"/Excel_Logo_Anim.gif"}
          alt="Logo"
          height={426}
          width={490}
        />

        <h3 className="name">name</h3>
        <p className="name">description</p>
        {/* <button onClick={toggleDetails}>Show Details</button>
        {isDetailsOpen && <div className="details">{details}</div>} */}
      </div>
      <div className="card">
        <Image
          src={"/Excel_Logo_Anim.gif"}
          alt="Logo"
          height={426}
          width={490}
        />

        <h3 className="name">name</h3>
        <p className="name">description</p>
        {/* <button onClick={toggleDetails}>Show Details</button>
        {isDetailsOpen && <div className="details">{details}</div>} */}
      </div>
      <div className="card">
        <Image
          src={"/Excel_Logo_Anim.gif"}
          alt="Logo"
          height={426}
          width={490}
        />

        <h3 className="name">name</h3>
        <p className="name">description</p>
        {/* <button onClick={toggleDetails}>Show Details</button>
        {isDetailsOpen && <div className="details">{details}</div>} */}
      </div>
      <div className="card">
        <Image
          src={"/Excel_Logo_Anim.gif"}
          alt="Logo"
          height={426}
          width={490}
        />

        <h3 className="name">name</h3>
        <p className="name">description</p>
        {/* <button onClick={toggleDetails}>Show Details</button>
        {isDetailsOpen && <div className="details">{details}</div>} */}
      </div>
      <div className="card">
        <Image
          src={"/Excel_Logo_Anim.gif"}
          alt="Logo"
          height={426}
          width={490}
        />

        <h3 className="name">name</h3>
        <p className="name">description</p>
        {/* <button onClick={toggleDetails}>Show Details</button>
        {isDetailsOpen && <div className="details">{details}</div>} */}
      </div>
      <div className="card">
        <Image
          src={"/Excel_Logo_Anim.gif"}
          alt="Logo"
          height={426}
          width={490}
        />

        <h3 className="name">name</h3>
        <p className="name">description</p>
        {/* <button onClick={toggleDetails}>Show Details</button>
        {isDetailsOpen && <div className="details">{details}</div>} */}
      </div>
      <div className="card">
        <Image
          src={"/Excel_Logo_Anim.gif"}
          alt="Logo"
          height={426}
          width={490}
        />

        <h3 className="name">name</h3>
        <p className="name">description</p>
        {/* <button onClick={toggleDetails}>Show Details</button>
        {isDetailsOpen && <div className="details">{details}</div>} */}
      </div>
      <div className="card">
        <Image
          src={"/Excel_Logo_Anim.gif"}
          alt="Logo"
          height={426}
          width={490}
        />

        <h3 className="name">name</h3>
        <p className="name">description</p>
        {/* <button onClick={toggleDetails}>Show Details</button>
        {isDetailsOpen && <div className="details">{details}</div>} */}
      </div>
      <div className="card">
        <Image
          src={"/Excel_Logo_Anim.gif"}
          alt="Logo"
          height={426}
          width={490}
        />

        <h3 className="name">name</h3>
        <p className="name">description</p>
        {/* <button onClick={toggleDetails}>Show Details</button>
        {isDetailsOpen && <div className="details">{details}</div>} */}
      </div>
      <div className="card">
        <Image
          src={"/Excel_Logo_Anim.gif"}
          alt="Logo"
          height={426}
          width={490}
        />

        <h3 className="name">name</h3>
        <p className="name">description</p>
        {/* <button onClick={toggleDetails}>Show Details</button>
        {isDetailsOpen && <div className="details">{details}</div>} */}
      </div>
      <div className="card">
        <Image
          src={"/Excel_Logo_Anim.gif"}
          alt="Logo"
          height={426}
          width={490}
        />

        <h3 className="name">name</h3>
        <p className="name">description</p>
        {/* <button onClick={toggleDetails}>Show Details</button>
        {isDetailsOpen && <div className="details">{details}</div>} */}
      </div>
      <div className="card">
        <Image
          src={"/Excel_Logo_Anim.gif"}
          alt="Logo"
          height={426}
          width={490}
        />

        <h3 className="name">name</h3>
        <p className="name">description</p>
        {/* <button onClick={toggleDetails}>Show Details</button>
        {isDetailsOpen && <div className="details">{details}</div>} */}
      </div>
      <div className="card">
        <Image
          src={"/Excel_Logo_Anim.gif"}
          alt="Logo"
          height={426}
          width={490}
        />

        <h3 className="name">name</h3>
        <p className="name">description</p>
        {/* <button onClick={toggleDetails}>Show Details</button>
        {isDetailsOpen && <div className="details">{details}</div>} */}
      </div>
      <div className="card">
        <Image
          src={"/Excel_Logo_Anim.gif"}
          alt="Logo"
          height={426}
          width={490}
        />

        <h3 className="name">name</h3>
        <p className="name">description</p>
        {/* <button onClick={toggleDetails}>Show Details</button>
        {isDetailsOpen && <div className="details">{details}</div>} */}
      </div>
      <div className="card">
        <Image
          src={"/Excel_Logo_Anim.gif"}
          alt="Logo"
          height={426}
          width={490}
        />

        <h3 className="name">name</h3>
        <p className="name">description</p>
        {/* <button onClick={toggleDetails}>Show Details</button>
        {isDetailsOpen && <div className="details">{details}</div>} */}
      </div>
      <div className="card">
        <Image
          src={"/Excel_Logo_Anim.gif"}
          alt="Logo"
          height={426}
          width={490}
        />

        <h3 className="name">name</h3>
        <p className="name">description</p>
        {/* <button onClick={toggleDetails}>Show Details</button>
        {isDetailsOpen && <div className="details">{details}</div>} */}
      </div>
      <div className="card">
        <Image
          src={"/Excel_Logo_Anim.gif"}
          alt="Logo"
          height={426}
          width={490}
        />

        <h3 className="name">name</h3>
        <p className="name">description</p>
        {/* <button onClick={toggleDetails}>Show Details</button>
        {isDetailsOpen && <div className="details">{details}</div>} */}
      </div>
      <div className="card">
        <Image
          src={"/Excel_Logo_Anim.gif"}
          alt="Logo"
          height={426}
          width={490}
        />

        <h3 className="name">name</h3>
        <p className="name">description</p>
        {/* <button onClick={toggleDetails}>Show Details</button>
        {isDetailsOpen && <div className="details">{details}</div>} */}
      </div>
      <div className="card">
        <Image
          src={"/Excel_Logo_Anim.gif"}
          alt="Logo"
          height={426}
          width={490}
        />

        <h3 className="name">name</h3>
        <p className="name">description</p>
        {/* <button onClick={toggleDetails}>Show Details</button>
        {isDetailsOpen && <div className="details">{details}</div>} */}
      </div>
    </MainCont>
  )
}

export default Navbar
