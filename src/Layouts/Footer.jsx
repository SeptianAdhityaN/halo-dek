import Logo from "../Elements/Logo";
import SocialMedia from "../Elements/SocialMedia";
const Footer = () => {
  return (
    <footer className="flex justify-center items-center flex-col">
      <div className="flex flex-col bg-slate-500 w-full justify-center items-center py-20">
        <Logo size="max-w-16" />
        <p className="max-w-xl text-center mt-16 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, rem animi autem distinctio consectetur adipisci dolorum, vitae modi esse ratione beatae iusto!</p>
        <div className="flex">
        <SocialMedia Target="instagram.com" logo="instagram"/>
        <SocialMedia Target="facebook.com" logo="facebook"/>
        <SocialMedia Target="twitter.com" logo="twitter"/>
        </div>
        
      </div>
      <div className="bg-slate-600 w-full h-10 flex justify-center items-center text-center py-8">
        <p>&copy; 2024 by Septian Adhitya N. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;