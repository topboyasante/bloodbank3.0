import { Link } from "react-router-dom";
import { TfiBell } from "react-icons/tfi";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { TiSpanner } from "react-icons/ti";
import { MdSecurity } from "react-icons/md";
import { AiOutlineInfoCircle, AiOutlineQuestionCircle } from "react-icons/ai";

const Settings = () => {
  return (
    <div className="w-full h-[93vh] grid grid-cols-1">
      <section className="mt-[30px] lg:ml-[60px] sm:ml-[10px]">
        <h1 className="pb-2">Settings</h1>
        <main className="border bg-white h-[80vh] lg:w-[70vw] sm:w-[370px] shadow-lg rounded-md">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 sm:grid-rows-3 lg:mt-[80px] lg:ml-[93px]">
            <Link to={"/donor/dashboard/settings/notifications"}>
              <div className="border-2 w-[180px] h-[149px] rounded-2xl shadow-md lg:mb-[77px] sm:mb-[20px] cursor-pointer">
                <div className="text-dark-red">
                  <center>
                    <h1 className="pt-[36px] font-semibold">Notification</h1>
                    <h1 className="pt-6 text-3xl ">
                      <TfiBell />
                    </h1>
                  </center>
                </div>
              </div>
            </Link>

            <Link to={"/donor/dashboard/settings/account"}>
              <div className="border-2 w-[180px] h-[149px] rounded-2xl shadow-md lg:mb-[77px] sm:mb-[20px] cursor-pointer">
                <div className="text-dark-red">
                  <center>
                    <h1 className="pt-[36px] font-semibold">Account</h1>
                    <h1 className="pt-6 text-3xl ">
                      <MdOutlineSwitchAccount />
                    </h1>
                  </center>
                </div>
              </div>
            </Link>

            <Link to={"/donor/dashboard/settings/support"}>
              <div className="border-2 w-[180px] h-[149px] rounded-2xl shadow-md lg:mb-[77px] sm:mb-[20px] cursor-pointer">
                <div className="text-dark-red">
                  <center>
                    <h1 className="pt-[36px] font-semibold">Support</h1>
                    <h1 className="pt-6 text-3xl ">
                      <TiSpanner />
                    </h1>
                  </center>
                </div>
              </div>
            </Link>

            <Link to={"/donor/dashboard/settings/security"}>
              <div className="border-2 w-[180px] h-[149px] rounded-2xl shadow-md cursor-pointer">
                <div className="text-dark-red">
                  <center>
                    <h1 className="pt-[36px] font-semibold">Security</h1>
                    <h1 className="pt-6 text-3xl ">
                      <MdSecurity />
                    </h1>
                  </center>
                </div>
              </div>
            </Link>

            <Link to={"/donor/dashboard/settings/about"}>
              <div className="border-2 w-[180px] h-[149px] rounded-2xl shadow-md cursor-pointer">
                <div className="text-dark-red">
                  <center>
                    <h1 className="pt-[36px] font-semibold">About</h1>
                    <h1 className="pt-6 text-3xl ">
                      <AiOutlineInfoCircle />
                    </h1>
                  </center>
                </div>
              </div>
            </Link>

            <Link to={"/donor/dashboard/settings/faqs"}>
              <div className="border-2 w-[180px] h-[149px] rounded-2xl shadow-md cursor-pointer">
                <div className="text-dark-red">
                  <center>
                    <h1 className="pt-[36px] font-semibold">FAQS</h1>
                    <h1 className="pt-6 text-3xl ">
                      <AiOutlineQuestionCircle />
                    </h1>
                  </center>
                </div>
              </div>
            </Link>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Settings;
