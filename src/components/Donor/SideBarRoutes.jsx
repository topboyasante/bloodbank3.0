import { Routes, Route } from "react-router-dom";
import MyProfile from "../../pages/Donor/Dashboard/MyProfile"
import Appointments from "../../pages/Donor/Dashboard/Appointments";
import DonationHistory from "../../pages/Donor/Dashboard/DonationHistory";
import Settings from "../../pages/Donor/Dashboard/Settings"
import AddAppointments from "./AppointmentsComponents/AddAppointments";
import Notifications from "./SettingsComponent/Notifications"
import Support from "./SettingsComponent/Support"
import About from "./SettingsComponent/About"
import FAQ from "./SettingsComponent/FAQ"
import Account from "./SettingsComponent/Account"
import Security from "./SettingsComponent/Security";
import ChangeProfile from "./ProfileComponents/ChangeProfile"





const SideBarRoutes = () => {
  return (
    <section>
      {/* Dashboard routes */}
      <Routes>
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/notifications" element = {<Notifications/>} />
        <Route path="/settings/account" element = {<Account />} />
        <Route path="/settings/support" element = {<Support/>} />
        <Route path="/settings/security" element = {<Security/>} />
        <Route path="/settings/about" element = {<About/>} />
        <Route path="/settings/faqs" element = {<FAQ/>} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path = "/profile/change-profile" element = {<ChangeProfile/>} />
        <Route path="/donation-history" element={<DonationHistory />} />
        <Route path="/appointments" element={<Appointments />}/>
        <Route path="/appointments/add-appointments" element={<AddAppointments />}/>

        {/* <Route path='*' element = {<PageNotFound />} /> */}
          
        
      </Routes>
    </section>
  );
};

export default SideBarRoutes;
