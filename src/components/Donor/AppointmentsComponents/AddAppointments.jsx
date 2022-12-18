import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AddAppointments = () => {
  const [bloodbank, setBloodBank] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [selectTime, setSelectTime] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      bloodBank: bloodbank,
      date: selectDate,
      time: selectTime,
    };

    await axios
      .post("https://localhost:7253/Appointment", data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
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

        <main className="border bg-white h-[590px] lg:w-[1150px] sm:w-[360px] shadow-lg rounded-md mt-[13px]">
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
                  type="date"
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
                  value={selectDate}
                  onChange={(event) => setSelectDate(event.target.value)}
                  type="time"
                  className="border-2 outline-none p-2 w-[90%] focus:border-[3px] rounded-md"
                  required
                >
                  <option disabled defaultValue=""></option>
                  <option value="11/02/2022">11/02/2022</option>
                  <option value="13/04/2022">13/04/2022</option>
                  <option value="12/02/2022">12/02/2022</option>
                  <option value="01/01/2023">01/01/2023</option>
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
                  <option value="02:30">02:30</option>
                  <option value="15:40">15:40</option>
                  <option value="12:10">12:10</option>
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
