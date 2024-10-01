const SocialMedia = (props) => {
  const {logo} = props;
  return (
    <div className="px-2">
      <i className={`bg-white border-2 border-white rounded-full shadow-xl text-5xl hover:bg-slate-900 hover:text-white duration-500 bx bxl-${logo}`}></i>
    </div>
  );
};

export default SocialMedia;