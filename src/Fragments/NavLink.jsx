import List from "../Elements/Link";

const NavLink = (props) => {
  const { classname } = props;
  return (
    <ul className={classname}>
      <List className="mb-2 lg:mb-0" link="/service">
        Layanan
      </List>
      <List className="mb-2 lg:mb-0" link="/news">
        Blog
      </List>
      <List className="mb-2 lg:mb-0" link="/about">
        Tentang Kami
      </List>
      <List className="mb-2 lg:mb-0" link="/contact">
        Kontak Kami
      </List>
    </ul>
  );
};

export default NavLink;
