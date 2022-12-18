import { PastAppointmentsData } from "../AppointmentsData/PastAppointmentData";
import { BiSupport } from "react-icons/bi";
import { TbEdit } from "react-icons/tb";
import { useEffect, useState } from "react";
import axios from "axios";
const PastAppointments = ({ searchValue }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      await axios
        .get("https://localhost:7253/Appointment")
        .then((response) => {
          console.log(response);
          setAppointments(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchAppointments();
  }, []);
  return (
    <table className="w-[90%] mt-5">
      <th className=" bg-[#e4e4e4] text-black border border-r-white py-2 font-light">
        #
      </th>
      <th className=" bg-[#e4e4e4] text-black border border-r-white py-2 font-light">
        Date
      </th>
      <th className=" bg-[#e4e4e4] text-black border border-r-white py-2 font-light">
        Blood Bank Name
      </th>
      <th className=" bg-[#e4e4e4] text-black border border-r-white py-2 font-light">
        Time
      </th>
      <th className=" bg-[#e4e4e4] text-black border py-2 font-light">
        Actions
      </th>

      <tbody>
        {appointments
          .filter((val) => {
            if (searchValue === "") {
              return val;
            } else if (
              val.bloodBank.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return val;
            }
          })
          .map((appointments, index) => (
            <tr key={index} className="border-b-2">
              <td className="text-center py-2">{appointments.id}</td>
              <td className="text-center">{appointments.date}</td>
              <td className="text-center">{appointments.bloodBank}</td>
              <td className="text-center">{appointments.time}</td>

              <td className="justify-center flex space-x-4 py-2 cursor-pointer">
                <span>
                  <TbEdit />
                </span>
                <span>
                  <BiSupport />
                </span>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default PastAppointments;
