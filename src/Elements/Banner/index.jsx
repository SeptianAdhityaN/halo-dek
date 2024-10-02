import BlockText from "./BlockText";

const Background = (props) => {
  const { title, image } = props;
  return (
    <div className={`w-full h-[450px] bg-fixed bg-center bg-cover object-cover bg-no-repeat')]`} style={{ backgroundImage: `url(${image})` }}>
      <BlockText title={title}/>
    </div>
  );
};

export default Background;