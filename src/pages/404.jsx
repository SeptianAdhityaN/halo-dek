import { useRouteError } from "react-router-dom";
import Button from "../Elements/Button";
import {Link} from "react-router-dom";
import Footer from "../Layouts/Footer";
import Navbar from "../Layouts/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="item-center">
      <Navbar />
      <div className="flex justify-center h-screen items-center flex-col gap-2">
      <h2 className="text-3xl font-bold text-slate-800">Oops...</h2>
      <p className="text-xl text-slate-700">Sorry, a unexpected error has occurred</p>
      <p className="text-lg text-slate-700">{error.statusText || error.message}</p>
      <Button variant="bg-slate-700">
        <Link to={'/'}>
          Back to Home Page
        </Link>
      </Button>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;