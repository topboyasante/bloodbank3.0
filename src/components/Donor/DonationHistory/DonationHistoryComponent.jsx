import { useState,useEffect } from "react";
import axios from "axios"
const DonationHistoryComponent = ({searchValue}) => {

  const [donations, setDonations] = useState(null)

  const fetchDonations = async () => {
    await axios.get('https://localhost:7253/DonationHistory')
    .then((response) => {
      setDonations(response.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }
  useEffect(() => {

    fetchDonations()
  },[])
  return (
    <table className="w-[90%] mt-5">
      <th className=" bg-[#e4e4e4] text-black border border-r-white py-2 font-light">
        #
      </th>
      <th className=" bg-[#e4e4e4] text-black border border-r-white py-2 font-light">
        Date
      </th>
      <th className=" bg-[#e4e4e4] text-black border border-r-white py-2 font-light">
        Time
      </th>
      <th className=" bg-[#e4e4e4] text-black border border-r-white py-2 font-light">
        Blood Bank Name
      </th>
      <th className=" bg-[#e4e4e4] text-black border py-2 font-light">
        Location
      </th>

      <th className=" bg-[#e4e4e4] text-black border py-2 font-light">
        Contact
      </th>

      <tbody>
        {donations ? donations.filter((val) => {
              if (searchValue === "" ) {
                return val
              }
              else if (val.bloodBank.toLowerCase().includes(searchValue.toLowerCase())){
                return val
              }
            })
        .map((donation, index) => (
          <tr key={donation.id} className="border-b-2">
            <td className="text-center py-2">{donation.id}</td>

            <td className="text-center">{donation.date.slice(0,10)}</td>

            <td className="text-center">{donation.time}</td>

            <td className="text-center">{donation.bloodBank}</td>

            <td className="text-center">{donation.location}</td>

            <td className="text-center">{donation.contact}</td>
          </tr>
        )) : "Please wait"}
      </tbody>
    </table>
  );
};

export default DonationHistoryComponent;
