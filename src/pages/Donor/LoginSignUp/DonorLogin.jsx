import { Link } from "react-router-dom";
import MainImage from "../../../Images/loginImg.png";
import Bladie from "../../../Images/BBLogo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../../redux/authSlice";
import axios from "axios";
import Swal from "sweetalert2";
import InputForm from "../../../components/InputForm";

function DonorLogin() {
  const initialValues = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialValues);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleonChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: values.email,
      password: values.password,
    };

    await axios
      .post("https://localhost:7253/Accounts/login", data)
      .then((response) => {
        // console.log(response)
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
          title: "User logged in successfully",
        });
        dispatch(authActions.login());
        navigate("/donor/dashboard/appointments");
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
          title: "Invalid email or password",
        });
      });
  };

  return (
    <main className="flex items-center w-[100vw] h-[100vh] justify-between">
      <img src={MainImage} alt="" className="hidden lg:flex w-[45%] h-full" />

      {/* Form */}
      <section className="w-[45%] mx-auto">
        <img src={Bladie} alt="/" className="mx-auto w-[200px]" />
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          {/* User Inputs */}
          {/* email */}

          <InputForm
            name={"email"}
            value={values.email}
            type={"email"}
            handleChange={handleonChange}
          />
          <InputForm
            labelText="password"
            name={"password"}
            value={values.password}
            type={"password"}
            handleChange={handleonChange}
          />

          <br />

          {/* Buttons */}
          <section className="text-white flex flex-col lg:flex-row gap-2 lg:gap-10">
            <button
              type="submit"
              className="btn btn-sm hover:bg-[#22FF29] border-none bg-[#11BD17] w-[300px] lg:w-[164px] h-[39px] rounded-md"
            >
              <span className="text-base capitalize font-medium">Login</span>
            </button>

            <Link to={"/"}>
              <button className="btn btn-sm hover:bg-[#F57999] border-none bg-[#D93D65] w-[300px] lg:w-[164px] h-[39px] rounded-md">
                <span className="text-base capitalize font-medium">Back</span>
              </button>
            </Link>
          </section>

          {/* Sign Up Link */}
          <div className="mt-5">
            <h3 className="w-[90vw] lg:w-full text-center">
              Don't have an Account?{" "}
              <Link
                to={"/donor/donor-signup"}
                className="text-[#D93D65] cursor-pointer hover:text-[#F57999]"
              >
                Sign Up
              </Link>
            </h3>
          </div>
        </form>
      </section>
    </main>
  );
}

export default DonorLogin;
