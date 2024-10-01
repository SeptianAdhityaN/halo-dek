import {Link} from "react-router-dom";
const List = (props) => {
  const {link, children} = props;
  return(
    <li className="mb-4 lg:mb-0"><Link className="text-white font-semibold flex items-center text-md gap-2 hover:text-white/75" to={link}>{children}</Link></li>
  );
};

export default List;