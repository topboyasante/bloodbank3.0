import SideBarRoutes from "../../../components/Donor/SideBarRoutes";
import DonorSideBar from "../../../components/Donor/DonorSideBar";
import DonorTopNav from "../../../components/Donor/DonorTopNav";

const DashBoard = () => {
  return (
    <>
      <main className="hidden lg:grid grid-cols-6">
        {/* SideBar */}

        <section className="h-full border bg-white">
          <DonorSideBar />
        </section>

        <section className="col-span-5">
          <div className="h-full">
            <div className="h-[8%]">
              <DonorTopNav />
            </div>

            <div className="bg-input-color h-[92%] rounded">
              <SideBarRoutes />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DashBoard;
