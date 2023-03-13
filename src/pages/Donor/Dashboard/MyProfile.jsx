import { Link } from "react-router-dom";
import Profile from "../../../Images/Profile.png";
const MyProfile = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 sm:flex sm:flex-col lg:gap-1 w-full h-screen">
      <div className="border bg-white h-[500px] w-[350px] lg:ml-[80px] sm:ml-5 mt-[90px] rounded-[15px] flex flex-col">
        <Link to={"/donor/dashboard/profile/change-profile"}>
          <h1 className="text-dark-red text-end w-[90%] pt-[20px] cursor-pointer">
            Edit
          </h1>
        </Link>

        <center>
          <figure className="py-10">
            <img src={Profile} alt="" />
          </figure>
        </center>

        <span className="text-xl text-dark-red text-center">Eddy Kobby</span>

        <table className="pt-5 w-[100%] text-center">
          <tbody>
            <tr>
              <td className="text-base text-door text-end">Location</td>
              <td>Dansoman, GA</td>
            </tr>

            <tr>
              <td className="text-base text-door text-end">Email</td>
              <td>kobbyokai18@gmail.com</td>
            </tr>

            <tr>
              <td className="text-base text-door text-end">Contact</td>
              <td>020-371-8200</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="border bg-white h-[600px] lg:w-[504px] sm:w-[350px] lg:ml-[70px] sm:ml-5 mt-12 rounded-[15px] text-left flex flex-col pl-5 pt-5 sm:mb-5">
        <h2>Info</h2>

        <table className="my-4">
          <tbody>
            <tr>
              <td className="text-base text-door">Blood Type</td>
              <td>O-</td>
            </tr>
            <tr>
              <td className="text-base text-door">Age</td>
              <td>26</td>
            </tr>
            <tr>
              <td className="text-base text-door">Sex</td>
              <td>Male</td>
            </tr>
            <tr>
              <td className="text-base text-door">Donations</td>
              <td>5</td>
            </tr>
            <tr>
              <td className="text-base text-door">Last Donation</td>
              <td>21 Nov, 2019</td>
            </tr>
          </tbody>
        </table>

        <label htmlFor="Bio">Bio</label>

        <textarea
          className="outline-none border-2 w-[90%] h-[60%] p-2 rounded-[15px]"
          maxLength={400}
        />
      </div>
    </div>
  );
};

export default MyProfile;
