import Button from "../Elements/Button";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="items-center">
      <Navbar />
      <div className="flex justify-center items-center flex-col gap-3 h-screen bg-slate-300">
        <h1 className="text-3xl font-bold text-slate-900">Hello React</h1>
        <Button variant="bg-slate-700">
          <Link to={"/service"}>Lets Start!</Link>
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
