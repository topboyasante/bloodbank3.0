import Profile from "../../../Images/Profile.png"
import { TbEdit } from "react-icons/tb";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react"

const ChangeProfile = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log(name, email, contact, location)    
    navigate(-1)
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [location, setLocation] = useState('')
  return (
    <div className="w-full h-screen grid grid-cols-1">
      <main className="mt-[30px] lg:ml-[60px]">
        <section className="border bg-white h-[690px] lg:w-[900px] sm:w-[390px] shadow-lg rounded-md ">
          <center>
            <figure className="mt-[35px]">
              <img src={Profile} alt="" />
              <div className="-mt-7 ml-20 text-xl text-dark-red">
                <TbEdit />
              </div>
            </figure>
          </center>

          {/* inputs */}
          <form 
          onSubmit={handleSubmit}
          className="flex flex-col lg:pl-[75px] sm:pl-5 pt-[48px]">
            <label className="pt-[18px]">Full Name</label>
            <input
              value = {name}
              onChange = { event => setName(event.target.value)}
              type="text"
              className="outline-none border-2 w-[90%] rounded-md p-2 bg-input-color"
              required
            />

            <label className="py-[18px]">Email</label>
            <input
            value = {email}
            onChange = { event => setEmail(event.target.value)}
              type="email"
              className="outline-none border-2 w-[90%] rounded-md p-2 bg-input-color"
              required
            />

            <label className="py-[18px]">Contact</label>
            <input
            value = {contact}
            onChange = { event => setContact(event.target.value)}
              type="tel"
              className="outline-none border-2 w-[90%] rounded-md p-2 bg-input-color"
              required
            />

            <label className="py-[18px]">Location</label>
            <input
            value = {location}
            onChange = { event => setLocation(event.target.value)}
              type="text"
              className="outline-none border-2 w-[90%] rounded-md p-2 bg-input-color"
              required
            />

            <center>
              <div className=" space-x-10 pt-[28px]">
                <button
                type = "submit"
                 className="btn bg-dark-red border-none hover:bg-dark-red">
                  <span className="capitalize font-medium text-white">
                    Save Changes
                  </span>
                </button>

                <Link
                  onClick={() => navigate(-1)}
                  className="text-dark-red cursor-pointer"
                >
                  Back
                </Link>
              </div>
            </center>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ChangeProfile;
