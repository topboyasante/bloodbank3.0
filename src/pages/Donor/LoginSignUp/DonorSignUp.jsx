import { Link, useNavigate } from "react-router-dom";
import MainImage from "../../../Images/loginImg.png";
import Bladie from "../../../Images/BBLogo.png";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import InputForm from "../../../components/InputForm";

const DonorSignUp = () => {
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    dateOfBirth: "",
    sex: "",
    password: "",
    conPassword: "",
    weight: 50,
  };
  const [values, setValues] = useState(initialValues);

  const [bloodGroup, setBloodGroup] = useState("");

  const navigate = useNavigate();

  const handleOnChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      fullName: values.fullName,
      email: values.email,
      phoneNumber: values.phone,
      location: values.location,
      dateOfBirth: values.dateOfBirth,
      sex: values.sex,
      password: values.password,
      confirmPassword: values.conPassword,
      bloodType: bloodGroup,
      weight: values.weight,
    };

    await axios
      .post("https://localhost:7253/Accounts/register", data)
      .then((response) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "User Added Successfully",
        });
        navigate("/donor/donor-login");
      })
      .catch((err) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: "Something went wrong Try again",
        });
      });
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
            {/* full name */}
            <InputForm
              value={values.fullName}
              name="fullName"
              handleChange={handleOnChange}
              type="text"
              labelText="Full Name"
            />

            {/* phone number */}
            <InputForm
              value={values.phone}
              name="phone"
              handleChange={handleOnChange}
              type="tel"
              labelText="Phone Number"
            />

            {/*location  */}
            <InputForm
              value={values.location}
              name="location"
              handleChange={handleOnChange}
              type="text"
              labelText="Location"
            />

            {/* email address */}
            <InputForm
              value={values.email}
              name="email"
              handleChange={handleOnChange}
              type="email"
              labelText="Email Address"
            />

            {/* Sex */}
            <InputForm
              value={values.sex}
              name="sex"
              handleChange={handleOnChange}
              type="text"
              labelText="Sex"
            />

            {/* date of birth */}
            <InputForm
              value={values.dateOfBirth}
              name="date Ofbirth"
              handleChange={handleOnChange}
              type="date"
              labelText="Date Of Birth"
            />

            {/* weight */}
            <InputForm
              value={values.weight}
              name="weight"
              handleChange={handleOnChange}
              type="number"
              labelText="Weight"
            />

            <div className="mb-3">
              <label className="font-normal text-sm">Blood Type</label>
              <br />
              <select
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[365px] p-2"
                required
              >
                <option value="Select Blood Type" disabled>
                  Select Blood Type
                </option>
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

            {/* password */}
            <InputForm
              value={values.password}
              name="password"
              handleChange={handleOnChange}
              type="password"
              labelText="Password"
            />

            {/* confirm password */}
            <InputForm
              value={values.conPassword}
              name="conPassword"
              handleChange={handleOnChange}
              type="password"
              labelText="Confirm Password"
            />
          </section>

          <button
            type="submit"
            className="btn btn-md bg-[#11BD17] w-[300px] lg:w-[164px] h-[39px] rounded-md mt-5 border-none"
          >
            <span className="text-base text-white capitalize font-medium">
              Sign Up
            </span>
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
            <h1>{bloodGroup}</h1>
          </h3>
        </div>
      </section>
    </main>
  );
};

export default DonorSignUp;
