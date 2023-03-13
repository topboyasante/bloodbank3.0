import { AiFillDelete } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {  useNavigate } from "react-router-dom";

const AllAppointments = ({ searchValue }) => {
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState(null);

  const fetchAllAppointments = async () => {
    const { data } = await axios.get("https://localhost:7253/Appointment");
    setAppointments(data);
  };


  const handleDeleteAppointment = async (appointment) => {
    try {
      await axios.delete(`https://localhost:7253/Appointment/${appointment.id}`)
      fetchAllAppointments()

     } catch (error) {
      console.log(error);
     }
    // Swal.fire({
    //     title: 'Are you sure?',
    //     text: "You won't be able to revert this!",
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes, delete it!'
    //   }).then((result) => {
    //       if (result.isConfirmed) {

    //           Swal.fire(
    //               'Deleted!',
    //               'Your file has been deleted.',
    //               'success'
    //             )
    //           }
    //         })
          }

  // const handleDeleteAppointment = async (appointment) => {
  //   try {
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     })
  //     .then((result) => {
  //       if (result.isConfirmed){
  //         await axios.delete(`https://localhost:7253/Appointment/${appointment.id}`)
  //         fetchAllAppointments()

  //         Swal.fire("Deleted", "Appointment has been deleted", "success")
  //       }
  //     })

  //    } catch (error) {
  //     console.log(error);
  //    }
  // };

  useEffect(() => {
    fetchAllAppointments();
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
          ? appointments
              .filter((val) => {
                if (searchValue === "") {
                  return val;
                } else if (
                  val.bloodBank
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((appointments, index) => (
                <tr key={index} className="border-b-2 ">
                  <td className="text-center py-2">{appointments.id}</td>
                  <td className="text-center">
                    {appointments.date.slice(0, 10)}
                  </td>
                  <td className="text-center">{appointments.bloodBank}</td>
                  <td className="text-center">{appointments.time}</td>

                  <td className="justify-center flex space-x-4 py-2 cursor-pointer">
                    <span
                      onClick={() => {
                        navigate(
                          `/donor/dashboard/appointments/${appointments.id}`
                        );
                      }}
                    >
                      {" "}
                      <span>
                        <TbEdit />
                      </span>
                    </span>
                    <span onClick={() => handleDeleteAppointment(appointments)}>
                      <AiFillDelete />
                    </span>
                  </td>
                </tr>
              ))
          : "Please wait"}
      </tbody>
    </table>
  );

  //  to={`/donor/dashboard/appointments/edit-appointment/${appointments.id}`}
};

export default AllAppointments;
