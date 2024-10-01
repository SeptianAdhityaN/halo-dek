import List from "../Elements/Link";

const NavLink = (props) => {
  const { classname } = props;
  return (
    <ul className={classname}>
      <List className="mb-2 lg:mb-0" link="/halo-dek/service">
        Layanan
      </List>
      <List className="mb-2 lg:mb-0" link="/halo-dek/news">
        Blog
      </List>
      <List className="mb-2 lg:mb-0" link="/halo-dek/about">
        Tentang Kami
      </List>
      <List className="mb-2 lg:mb-0" link="/halo-dek/contact">
        Kontak Kami
      </List>
    </ul>
  );
};

export default NavLink;
