import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";

const ServicePage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center flex-col gap-3 h-screen bg-slate-300">
        <h1 className="text-3xl font-bold text-slate-900">Service Page</h1>
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;