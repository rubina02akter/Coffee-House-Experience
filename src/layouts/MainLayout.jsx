import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import  { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
    <div>
         <Toaster />
      {/* navbar */}
      <div className='h-16'>
        <Navbar />
      </div>
      {/* dynamic-section */}
      <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto px-12">
        <Outlet></Outlet>
      </div>
      
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;