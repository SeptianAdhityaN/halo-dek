import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";
import Banner from "../Elements/Banner";

const NewsPage = () => {
  return (
    <div>
      <Navbar />
      <Banner title="Blog" image="images/background.jpg"></Banner>
      <div className="flex justify-center items-center flex-col gap-3 h-screen bg-slate-300">
        <h1 className="text-3xl font-bold text-slate-900">News Page</h1>
      </div>
      <Footer />
    </div>
  );
};

export default NewsPage;