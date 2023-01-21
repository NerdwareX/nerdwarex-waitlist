export const Input = ({ icon, ...props }) => {
  return (
    <>
      {icon ? (
        <div className="relative w-full">
          <input
            {...props}
            type="text"
            className="h-[60px] px-4 rounded border text-[17px] border-[#2B2B8B] w-full md:min-w-[544px] focus:outline-0"
          />

          <span className="absolute top-1/2 -translate-y-1/2 right-8">
            {icon}
          </span>
        </div>
      ) : (
        <input
          {...props}
          type="text"
          className="h-[60px] px-4 rounded border text-[17px] border-[#2B2B8B] w-full md:min-w-[544px] focus:outline-0"
        />
      )}
    </>
  );
};
