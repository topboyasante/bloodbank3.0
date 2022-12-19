import { CgProfile } from "react-icons/cg";
import { AiOutlineSchedule } from "react-icons/ai";
import { RiSettings2Line } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { BsClockHistory } from "react-icons/bs";

export const DonorSideBarData = [
    {
        id: 1,
        icon: <CgProfile />,
        path: '/donor/dashboard/profile',
        title: "My Profile"
    },

    {
        id: 2,
        icon: <AiOutlineSchedule />,
        path: '/donor/dashboard/appointments',
        title: "Appointments"
    },

    {
        id: 3,
        icon: <BsClockHistory />,
        path: '/donor/dashboard/donation-history',
        title: "Donation History"
    },

    {
        id: 4,
        icon: <RiSettings2Line />,
        path: '/donor/dashboard/settings',
        title: "Settings"
    },

    {
        id: 5,
        icon: <BiLogOut />,
        path: '/donor/donor-login',
        title: "Logout",
        last : true
    }
]