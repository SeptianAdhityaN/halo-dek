const Button = (props) => {
  const {children, variant="bg-slate-800"} = props;
  return (
    <button className={`text-white font-semibold h-10 px-6 rounded ${variant} hover:bg-slate-900 duration-500`} type="submit">{children}</button>
  );
};

export default Button;