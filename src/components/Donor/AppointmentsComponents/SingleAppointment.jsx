import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const SingleAppointment = () => {
  const { id } = useParams();
  console.log(id);

  const [appointment, setAppointment] = useState({
    bloodBank: "",
    date: "",
    time: "",
    location: "",
  });

  const handleSubmit = async (e) => {
    // console.log(appointment);
    console.log("eeee");
    e.preventDefault();
    axios
      .put(`https://localhost:7253/Appointment` + "/" + id, appointment)
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
          title: "Appointment Updated Successfully",
        });
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

  const handleChange = (e) => {
    const appointmentClone = { ...appointment };
    appointmentClone[e.target.name] = e.target.value;
    setAppointment(appointmentClone);
  };

  useEffect(() => {
    const fetchAppointment = async () => {
      const { data } = await axios.get(
        `https://localhost:7253/Appointment/${id}`
      );
      setAppointment(data);
    };

    fetchAppointment();
  }, []);

  
  return (
    <div className="w-full h-screen grid grid-cols-1">
      <section className="mt-[30px] lg:ml-[60px] sm:ml-5">
        <main className="border bg-white h-[90vh] lg:w-[1150px] sm:w-[360px] shadow-lg rounded-md mt-[13px]">
          <section className="lg:pl-[32px] sm:pl-5 pt-[16px]">
            <h1>Edit Appointment</h1>

            <h1 className="pt-[21px] text-[15px] text-door">
              Please input the required data below
            </h1>

            {/* input fields */}

            <form onSubmit={handleSubmit} className="pt-[37px]">
              <div className="flex flex-col pb-[42px]">
                <label className="pb-[5px]">Blood Bank</label>
                <input
                  value={appointment.bloodBank}
                  onChange={handleChange}
                  name="bloodBank"
                  type="text"
                  className="border-2 outline-none p-2 w-[90%] focus:border-[3px] rounded-md"
                  required
                />
              </div>

              <div className="flex flex-col pb-[42px]">
                <label className="pb-[5px]">Date</label>
                <input
                  onChange={handleChange}
                  name="date"
                  value={appointment.date}
                  type="text"
                  className="border-2 outline-none p-2 w-[90%] focus:border-[3px] rounded-md"
                  required
                />
              </div>

              <div className="flex flex-col pb-[42px]">
                <label className="pb-[5px]">Select Time</label>
                <input
                  onChange={handleChange}
                  name="time"
                  value={appointment.time}
                  type="text"
                  className="border-2 outline-none p-2 w-[90%] focus:border-[3px] rounded-md"
                  required
                />
              </div>

              <div className="flex flex-col pb-[42px]">
                <label className="pb-[5px]">Location</label>
                <input
                  onChange={handleChange}
                  name="location"
                  value={appointment.location}
                  type="text"
                  className="border-2 outline-none p-2 w-[90%] focus:border-[3px] rounded-md"
                  required
                />
              </div>

              <input
                type="submit"
                value="Update appointment"
                className="btn bg-dark-red border-none w-[90%] mt-[46px] hover:bg-dark-red"
              />
            </form>
          </section>
        </main>
      </section>
    </div>
  );
};

export default SingleAppointment;
