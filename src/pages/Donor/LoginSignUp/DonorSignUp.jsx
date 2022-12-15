import { Link } from "react-router-dom";
import MainImage from "../../../Images/loginImg.png";
import Bladie from "../../../Images/BBLogo.png";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import axios from "axios"

const DonorSignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState();
  const [sex, setSex] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [weight, setWeight] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
        fullName : fullName,
        email: email,
        phoneNumber : phone,
        location : location,
        dateOfBirth : dateOfBirth,
        sex : sex,
        password : password,
        confirmPassword : conPassword,
        bloodType : bloodGroup,
        weight : weight 
    }

    await axios.post('https://localhost:7253/Accounts/register',  data)
    .then(response =>{
        console.log(response, "done")
    })
    .catch(err => {
         console.log(err)
    })
  };

  return (
    <main className="flex items-center w-[100vw] h-[100vh] justify-between">
      {/* Image */}
      <img
        src={MainImage}
        alt="BBlogo"
        className="hidden lg:flex w-[45%] h-full"
      />
      {/* Form */}
      <section className="w-[45%] mx-auto flex flex-col items-center ">
        <img
          src={Bladie}
          alt="/"
          className="mt-[10em] lg:mt-0 mx-auto lg:w-[200px]"
        />
        <p className="text-center text-gray-400 mb-5">Create an Account.</p>

        {/* Input Areas */}
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <section className="grid lg:grid-cols-2 place-items-center gap-5">
            <div className="mb-3">
              <label className="font-normal text-sm">Full Name</label>
              <br />
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
                required
              />
            </div>

            <div className="mb-3">
              <label className="font-normal text-sm">Phone Number</label>
              <br />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                maxLength={14}
                className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
                required
              />
            </div>

            <div className="mb-3">
              <label className="font-normal text-sm">Location</label>
              <br />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
                required
              />
            </div>

             <div className="mb-3">
            <label className="font-normal text-sm">Email Address</label>
            <br />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
              required
            />
          </div>

           

           

            <div className="mb-3">
              <label className="font-normal text-sm">Sex</label>
              <br />
              <input
                value={sex}
                onChange={(e) => setSex(e.target.value)}
                type="text"
                maxLength={6}
                className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
                required
              />
            </div>

            <div className="mb-3">
              <label className="font-normal text-sm">Date of Birth</label>
              <br />

              <input 
                className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
                value = {dateOfBirth}
              type="date" name="" id="" 
              onChange={() => setDateOfBirth()} />
              {/* <DatePicker
                selected={dateOfBirth}
                onChange={(date) => setDateOfBirth(date)}
                maxDate={addDays(new Date(), 1)}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                // placeholderText="dd mm yyyy"
                className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
                required
                /> */}

              {/* <input
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                type="date"
                className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
                required
              /> */}
            </div>

            <div className="mb-3">
              <label className="font-normal text-sm">Weight</label>
              <br />
              <input
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                type="number"
                min={50}
                max={400}
                className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
                required
              />
            </div>

            <div className="mb-3">
              <label className="font-normal text-sm">Blood Type</label>
              <br />
              <select
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
                required
              >
                <option value="Select Blood Type">Select Blood Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB">AB-</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="font-normal text-sm">Password</label>
              <br />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
                required
              />
            </div>

            <div className="mb-3">
              <label className="font-normal text-sm"> Confirm Password</label>
              <br />
              <input
                value={conPassword}
                onChange={(e) => setConPassword(e.target.value)}
                type="password"
                className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
                required
              />
            </div>
          </section>

          <button
            type="submit"
            className="bg-[#11BD17] w-[300px] lg:w-[164px] h-[39px] rounded-md mt-5"
          >
            <span className="text-base text-white">Sign Up</span>
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-5">
          <h3 className="w-[90vw] lg:w-full text-center">
            Already have an Account?{" "}
            <Link
              to={"/donor/donor-login"}
              className="text-[#D93D65] cursor-pointer"
            >
              Login
            </Link>
          </h3>
        </div>
      </section>

      <h1>{dateOfBirth}</h1>
    </main>
  );
};

export default DonorSignUp;
