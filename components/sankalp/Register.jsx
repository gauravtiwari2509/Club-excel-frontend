import React, { useState, useEffect } from "react";

const submitFormData = async (data) => {
  console.log(data);
  alert("registration not started it will start soon");
  // try {
  //   const response = await fetch("YOUR_BACKEND_URL_HERE", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });

  //   const result = await response.json();
  //   if (response.ok) {
  //     alert("Registration successful!");
  //   } else {
  //     alert("Error: " + result.message);
  //   }
  // } catch (error) {
  //   alert("Error submitting form: " + error.message);
  // }
};

const Register = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    rollNumber: "",
    hostelLocal: "",
    groupName: "",
    hackId: "",
    instituteEmail: "", // New field for institute email
  });

  const [group, setGroup] = useState([]);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [instituteEmailError, setInstituteEmailError] = useState("");

  useEffect(() => {
    if (data.rollNumber) {
      const sub = data.rollNumber.substring(0, 4);

      if (sub === "2024") {
        setGroup(["Group 1", "Group 2", "Group 3"]);
      } else if (sub === "2023") {
        setGroup(["Group 2", "Group 3"]);
      } else if (sub === "2022") {
        setGroup(["Group 3"]);
      } else if (sub === "2021") {
        setGroup(["Group 3"]);
      } else {
        setGroup(["Incorrect roll no"]);
      }
    } else {
      setGroup([]);
    }
  }, [data.rollNumber]);

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const validatePhone = (phone) => {
    const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phone)) {
      setPhoneError("Enter a valid 10-digit phone number");
    } else {
      setPhoneError("");
    }
  };

  const validateInstituteEmail = (email) => {
    if (!email.includes(".edu")) {
      setInstituteEmailError("Institute email must contain '.edu'");
    } else {
      setInstituteEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError || phoneError || instituteEmailError) {
      alert("Please correct the errors before submitting.");
    } else {
      // Send data to the backend
      submitFormData(data);
    }
  };

  return (
    <div className="min-h-screen w-screen overflow-hidden flex flex-col items-center bg-black text-white px-6 py-10">
      {/* Header Image */}
      <div className="w-full flex justify-center">
        <img
          src="/components/Group 16.png"
          alt="Code Crusade 3.0"
          className="max-w-full md:w-2/3 lg:w-1/2 h-auto mx-auto"
        />
      </div>

      {/* Content Section */}
      <div className="container mx-auto flex flex-col md:flex-row gap-8 mt-10 w-full">
        {/* Left Section - Event Info */}
        <div className="bg-[#693B14] text-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <h2 className="text-xl font-bold text-orange-400">
            Code Crusade is a coding competition.
          </h2>
          <p className="mt-2 text-gray-300">
            Get ready to unleash your coding skills at Code Crusade 3.0! Club
            Excel brings tech and fun to Sankalp 2025. Join us for an
            electrifying experience of coding battles, tech challenges, and
            interactive events.
          </p>
        </div>

        {/* Right Section - Registration Form */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full md:w-2/3">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              <div>
                <label htmlFor="name" className="block font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={data.name}
                  placeholder="Enter Name"
                  className="w-full p-3 border rounded-lg bg-gray-100"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-semibold">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={data.phone}
                  placeholder="Enter Phone Number"
                  className="w-full p-3 border rounded-lg bg-gray-100"
                  onChange={(e) => {
                    setData({ ...data, phone: e.target.value });
                    validatePhone(e.target.value);
                  }}
                  required
                />
                {phoneError && (
                  <p className="text-red-500 text-sm">{phoneError}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block font-semibold">
                  Student Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={data.email}
                  placeholder="Enter your email"
                  className="w-full p-3 border rounded-lg bg-gray-100"
                  onChange={(e) => {
                    setData({ ...data, email: e.target.value });
                    validateEmail(e.target.value);
                  }}
                  required
                />
                {emailError && (
                  <p className="text-red-500 text-sm">{emailError}</p>
                )}
              </div>

              <div>
                <label htmlFor="instituteEmail" className="block font-semibold">
                  Institute Email
                </label>
                <input
                  id="instituteEmail"
                  type="email"
                  value={data.instituteEmail}
                  placeholder="Enter your institute email"
                  className="w-full p-3 border rounded-lg bg-gray-100"
                  onChange={(e) => {
                    setData({ ...data, instituteEmail: e.target.value });
                    validateInstituteEmail(e.target.value);
                  }}
                  required
                />
                {instituteEmailError && (
                  <p className="text-red-500 text-sm">{instituteEmailError}</p>
                )}
              </div>

              <div>
                <label htmlFor="rollNumber" className="block font-semibold">
                  Roll Number
                </label>
                <input
                  id="rollNumber"
                  type="text"
                  value={data.rollNumber}
                  placeholder="Enter Roll Number"
                  className="w-full p-3 border rounded-lg bg-gray-100"
                  onChange={(e) =>
                    setData({ ...data, rollNumber: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label htmlFor="hackId" className="block font-semibold">
                  HackerRank Id
                </label>
                <input
                  id="hackId"
                  type="text"
                  value={data.hackId}
                  placeholder="Enter HackerRank Id"
                  className="w-full p-3 border rounded-lg bg-gray-100"
                  onChange={(e) => setData({ ...data, hackId: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="hostelLocal" className="block font-semibold">
                  Hostelite/Localite
                </label>
                <select
                  id="hostelLocal"
                  className="w-full p-3 border rounded-lg bg-gray-100"
                  onChange={(e) =>
                    setData({ ...data, hostelLocal: e.target.value })
                  }
                  required
                >
                  <option value="">Select</option>
                  <option value="hostelite">Hostelite</option>
                  <option value="localite">Localite</option>
                </select>
              </div>

              {/* Group */}
              <div>
                <label htmlFor="groupName" className="block font-semibold">
                  Group
                </label>
                <select
                  id="groupName"
                  className="w-full p-3 border rounded-lg bg-gray-100"
                  onChange={(e) =>
                    setData({ ...data, groupName: e.target.value })
                  }
                  required
                >
                  <option value="">Select</option>
                  {group.map((option, index) => (
                    <option key={index}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-all duration-300 mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
