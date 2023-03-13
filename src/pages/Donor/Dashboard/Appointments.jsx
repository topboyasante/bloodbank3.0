import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import PastAppointments from "../../../components/Donor/AppointmentsComponents/PastAppointments";
import PendingAppointments from "../../../components/Donor/AppointmentsComponents/PendingAppointments";
import AllAppointments from "../../../components/Donor/AppointmentsComponents/AllAppointments";
import { IoMdAdd } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Appointments = () => {
  const [filter, setFilter] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const [searchOption, setSearchOption] = useState("");

  const activeNav = "bg-input-color p-2 rounded-md font-semibold duration-75";

  return (
    <div className="w-full h-[92.9vh] grid grid-cols-1">
      <section className="mt-[30px] ml-[60px]">
        <h1 className="pb-2">Appointments</h1>
        <main className="border bg-white h-[80vh] w-[70vw] shadow-lg rounded-md  ">
          {/* appointments nav */}

          <section className="flex flex-col pl-[26px]">
            <nav className="space-x-4 pt-4 text-sm pb-7">
              <NavLink
                onClick={() => setFilter("pending")}
                className={filter === "pending" ? activeNav : ""}
              >
                Pending Appointments
              </NavLink>
              <NavLink
                onClick={() => setFilter("past")}
                className={filter === "past" ? activeNav : ""}
              >
                Past Appointments
              </NavLink>
              <NavLink
                onClick={() => setFilter("all")}
                className={filter === "all" ? activeNav : ""}
              >
                All Appointments
              </NavLink>
            </nav>

            {/* end of nav */}

            <div className="flex flex-row justify-between text-door w-[90%]">
              <div className="border flex flex-row px-4 py-1 rounded-md space-x-5">
                <div className="text-lg">
                  <CiSearch />
                </div>
                <input
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                  type="search"
                  className="outline-none"
                  id=""
                  placeholder="Search..."
                />
              </div>

              <div className="space-x-4">
                <label>Filter By</label>
                <select
                  value={searchOption}
                  onChange={(e) => setSearchOption(e.target.value)}
                  className="border-2 rounded-md outline-none cursor-pointer p-1 h-[33px]"
                >
                  <option value="All">All</option>
                  <option value="Date">Date</option>
                  <option value="Location">Location</option>
                </select>
              </div>

              <Link to={"/donor/dashboard/appointments/add-appointments"}>
                <button className="btn btn-sm bg-white text-dark-red border-dark-red hover:text-white hover:bg-dark-red duration-500 hover:border-none ">
                  <div className="space-x-2 flex">
                    <span className="capitalize font-medium ">
                      Add Appointment
                    </span>
                    <span className="">
                      {" "}
                      <IoMdAdd />{" "}
                    </span>
                  </div>
                </button>
              </Link>
            </div>

            <div>
              {filter === "pending" && (
                <PendingAppointments searchValue={searchValue} />
              )}
              {filter === "past" && (
                <PastAppointments searchValue={searchValue} />
              )}
              {filter === "all" && (
                <AllAppointments
                  searchValue={searchValue}
                  searchOption={searchOption}
                />
              )}
            </div>
          </section>
        </main>
      </section>
    </div>
  );
};

export default Appointments;
