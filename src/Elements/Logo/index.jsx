import { Link } from "react-router-dom";

const Logo = (props) => {
  const {size} = props;
  return (
    <Link to="/" className="flex gap-2 text-white font-bold uppercase items-center py-1 justify-center">
    <img className={`${size}`} src="./public/handshake-512.png" alt="logo" />
    Halo Dek
    </Link>
  );
};

export default Logo;