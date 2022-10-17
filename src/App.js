import Vector from "./assets/Vector.png";
import Group from "./assets/Group 32.png";

function App() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <div className="hidden lg:flex lg:items-center lg:justify-center  bg-gradient-to-r from-[#AD37E0] to-[#EE2B3B] h-screen">
        <h1 className="text-white text-3xl font-semibold uppercase">
          Check in Mobile View
        </h1>
      </div>
      <div className="w-screen h-screen bg-gray-100 flex flex-col items-center justify-center lg:hidden">
        <div className="w-11/12 h-[369px]  bg-gradient-to-r from-[#AD37E0] to-[#EE2B3B] rounded-[2rem] shadow-2xl p-5 relative">
          <div className="w-full flex items-center justify-between">
            <div>
              <h1 className="text-white text-3xl font-black">Booking</h1>
              <h1 className="text-white text-3xl font-black">Confirmed</h1>
            </div>
            <div>
              <img
                src={Vector}
                alt="vector"
                className="h-[76px] w-[76px] object-cover"
              />
            </div>
          </div>
          <div className="text-white py-14">
            <h1>Go to home page</h1>
            <h1>For new booking</h1>
          </div>
          <div className="pt-14">
            <button className="uppercase font-semibold px-4 py-2 bg-white rounded-full shadow-lg">
              Home
            </button>
          </div>
          <div className="absolute -bottom-[1px] right-5">
            <img src={Group} alt="group" className="h-[260px] object-contain" />
          </div>
        </div>
        <div className="w-11/12 h-[166px] bg-white shadow-2xl p-5 mt-6 rounded-[2rem]">
          <div className="w-full flex items-center">
            <h1 className="w-1/2">Patients name</h1>
            <h1 className="w-1/2 font-semibold">Wayne Barnes</h1>
          </div>
          <div className="w-full flex items-center">
            <h1 className="w-1/2">Date & Time</h1>
            <h1 className="w-1/2 font-semibold">12 Nov , 11:00 am</h1>
          </div>
          <div className="w-full flex items-center">
            <h1 className="w-1/2">Service</h1>
            <h1 className="w-1/2 font-semibold">Dental braces</h1>
          </div>
          <div className="w-full flex items-center">
            <div className="w-1/2" />
            <h1 className="w-1/2 text-xs">
              12/2, Mathura Road, Sector 37,Faridabad - Delhi
            </h1>
          </div>
        </div>
        <div className="w-11/12">
          <button
            className="w-full rounded-full py-2  bg-gradient-to-r 
          from-[#AD37E0] to-[#EE2B3B] shadow-2xl text-white uppercase font-semibold mt-4"
          >
            done
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
