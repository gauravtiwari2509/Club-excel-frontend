import React, { useState } from "react";

// A function to handle sending the form data to the backend (use a proper URL for your backend)
const submitFormData = async (data) => {
  console.log(data);
  alert("registration not started, it will start soon");

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
    rollNo: "",
    hostelLocal: "",
    email: "",
  });

  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validatePhone = (phone) => {
    const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phone)) {
      setPhoneError("Enter a valid 10-digit phone number starting with 6-9");
    } else {
      setPhoneError("");
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailError("Enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneError || emailError) {
      alert("Please correct the errors before submitting.");
    } else {
      // Send data to the backend
      submitFormData(data);
    }
  };

  return (
    <div className="min-h-screen w-screen overflow-hidden flex flex-col items-center bg-black text-white px-6 py-10">
      <div className="w-full flex justify-center">
        <img
          src="/components/Group 124.png"
          alt="Code Crusade 3.0"
          className="max-w-full md:w-2/3 lg:w-1/2 h-auto mx-auto"
        />
      </div>

      <div className="container mx-auto flex flex-col md:flex-row gap-8 mt-10 w-full">
        <div className="bg-[#693B14] text-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <h2 className="text-xl font-bold text-orange-400">
            ctrl + win showdown
          </h2>
          <p className="mt-2 text-gray-300">
            1st game:- two pair game (e.g. Jenga, Chess, Ludo, or other custom
            game of your choice)
            <br />
            2nd game:- quiz round (with buzzer) <br />
            3rd:- surprise round
          </p>
        </div>

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
                  placeholder="youremail@gmail.com"
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
                <label htmlFor="rollNo" className="block font-semibold">
                  Roll Number
                </label>
                <input
                  id="rollNo"
                  type="text"
                  value={data.rollNo}
                  placeholder="Enter Roll Number"
                  className="w-full p-3 border rounded-lg bg-gray-100"
                  onChange={(e) => setData({ ...data, rollNo: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="hostelLocal" className="block font-semibold">
                  Hostelite/Localite
                </label>
                <select
                  id="hostelLocal"
                  value={data.hostelLocal}
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
