const SocialMedia = (props) => {
  const {Target, logo} = props;
  return (
    <div className="px-2">
      <a href={`https://${Target}`} target="_blank" rel="noopener noreferrer"><i className={`bg-white border-2 border-white rounded-full shadow-xl text-5xl hover:bg-slate-900 hover:text-white duration-500 bx bxl-${logo}`}></i></a>
    </div>
  );
};

export default SocialMedia;