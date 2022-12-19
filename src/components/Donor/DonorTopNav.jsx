import Profile from "../../Images/Profile.png"
const DonorTopNav = () => {
    return ( 
        <nav className="flex justify-end text-black items-center">
            <div className="flex space-x-1">
                <span className="flex flex-col">
                    <span className='pt-2'>Eddy Kobby</span>
                    <span className="text-xs text-input-color">Donor</span>
                </span>
                <div className="rounded-full border p-2 w-[60px]">
                    <img src={Profile} alt="avatar" />
                </div>
            </div>
        </nav>
     );
}
 
export default DonorTopNav;