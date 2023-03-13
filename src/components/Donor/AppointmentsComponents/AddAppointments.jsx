import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const AddAppointments = () => {
  const [bloodbank, setBloodBank] = useState("");
  const [date, setSelectDate] = useState();
  const [selectTime, setSelectTime] = useState("");
  const [location, setLocation] = useState("");

  const data = {
    bloodBank: bloodbank,
    date: date,
    time: selectTime,
    location: location,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(bloodbank, date, selectTime,location);
    await axios
      .post("https://localhost:7253/Appointment", data)
      .then((res) => {
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
          title: "Appointment Added Successfully",
        });
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
          title: "Something went wrong",
        });
      });
  };

  return (
    <div className="w-full h-screen grid grid-cols-1">
      <section className="mt-[30px] lg:ml-[60px] sm:ml-5">
        <Link
          to={"/donor/dashboard/appointments"}
          className="pb-[13px] cursor-pointer font-semibold"
        >
          Back
        </Link>

        <main className="border bg-white h-[90vh] lg:w-[1150px] sm:w-[360px] shadow-lg rounded-md mt-[13px]">
          <section className="lg:pl-[32px] sm:pl-5 pt-[16px]">
            <h1>New Appointment</h1>

            <h1 className="pt-[21px] text-[15px] text-door">
              Please input the required data below
            </h1>

            {/* input fields */}

            <form onSubmit={handleSubmit} className="pt-[37px]">
              <div className="flex flex-col pb-[42px]">
                <label className="pb-[5px]">Select Blood Bank</label>
                <select
                  value={bloodbank}
                  onChange={(event) => setBloodBank(event.target.value)}
                  type="text"
                  className="border-2 outline-none p-2 w-[90%] focus:border-[3px] rounded-md"
                  required
                >
                  <option disabled defaultValue=""></option>
                  <option value="UGMC Blood Bank">UGMC Blood Bank</option>
                  <option value="Ridge Hospital">Ridge Hospital</option>
                </select>
              </div>

              <div className="flex flex-col pb-[42px]">
                <label className="pb-[5px]">Select Date</label>
                <select
                  value={date}
                  onChange={(event) => setSelectDate(event.target.value)}
                  type="text"
                  className="border-2 outline-none p-2 w-[90%] focus:border-[3px] rounded-md"
                  required
                >
                  {/* <option disabled defaultValue=""></option> */}
                  <option>2023-12-11</option>
                  <option>2023-12-12</option>
                  <option>2023-12-13</option>
                  <option>2023-12-14</option>
                  <option>2023-12-15</option>
                </select>
              </div>

              <div className="flex flex-col pb-[42px]">
                <label className="pb-[5px]">Select Time</label>
                <select
                  value={selectTime}
                  onChange={(event) => setSelectTime(event.target.value)}
                  className="border-2 outline-none p-2 w-[90%] focus:border-[3px] rounded-md"
                  required
                >
                  <option disabled defaultValue=""></option>
                  <option >02:30</option>
                  <option>15:40</option>
                  <option>12:10</option>
                  <option>17:10</option>
                </select>
              </div>

              <div className="flex flex-col pb-[42px]">
                <label className="pb-[5px]">Select Location</label>
                <select
                  className="border-2 outline-none p-2 w-[90%] focus:border-[3px] rounded-md"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                >
                  <option disabled selected></option>
                  <option>Dansoman</option>
                  <option>Madina</option>
                  <option>Kaneshie</option>
                  <option>Zongo</option>
                </select>
              </div>

              <button className="btn bg-dark-red border-none w-[90%] mt-[46px] hover:bg-dark-red">
                <span className="capitalize font-medium text-white">
                  Book Appointment
                </span>
              </button>
            </form>
          </section>
        </main>
      </section>
    </div>
  );
};

export default AddAppointments;
