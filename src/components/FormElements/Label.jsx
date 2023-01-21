export const Label = ({ children, ...props }) => {
  return (
    <label {...props} className="capitalize tracking-[3%] text-xl leading-7">
      {children}
    </label>
  );
};
