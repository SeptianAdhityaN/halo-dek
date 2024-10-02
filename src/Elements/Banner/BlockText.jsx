import List from "../Link";

const BlockText = (props) => {
  const {title} = props;
  return (
    <div className="text-center flex justify-center items-center flex-col w-full h-full">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <span className="text-slate-800">______</span>
      <div className="flex gap-2">
        <List link="/halo-dek/">Home</List>
        <span><i className="bx bx-chevron-right text-slate-800"></i></span>
        <p className="text-white">{title}</p>
      </div>
    </div>
  );
};

export default BlockText;