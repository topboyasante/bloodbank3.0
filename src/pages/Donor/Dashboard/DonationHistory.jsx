import DonationHistoryComponent from "../../../components/Donor/DonationHistory/DonationHistoryComponent";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const DonationHistory = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="w-full h-[93vh] grid grid-cols-1">
      <section className="mt-[30px] ml-[60px]">
        <h1 className="pb-2">Donation History</h1>
        <main className="border bg-white h-[80vh] w-[70vw] shadow-lg rounded-md  ">
          <section className="flex flex-col pl-[26px] pt-[41px]">
            <div className="flex flex-row space-x-10 pr-5 text-door">
              <div className="border flex flex-row px-4 py-1 rounded-md space-x-5">
                <div className="text-lg">
                  <CiSearch />
                </div>
                <input
                  type="search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="outline-none"
                  id=""
                  placeholder="Search..."
                />
              </div>

              <div className="space-x-4">
                <label>Filter By</label>
                <select
                  className="border-2 rounded-md outline-none cursor-pointer p-1 h-[33px]"
                  name=""
                  id=""
                >
                  <option selected>All</option>
                  <option value="Date">Date</option>
                  <option value="Blood Bank">Blood Bank</option>
                  <option value="Quantity">Quantity</option>
                  <option value="Location">Location</option>
                </select>
              </div>
            </div>

            <DonationHistoryComponent searchValue={searchValue} />
          </section>
        </main>

        {/* end of box */}
      </section>
    </div>
  );
};

export default DonationHistory;
