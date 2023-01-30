import cx from "classnames";
import { motion } from "framer-motion";

const Button = ({ pill = true, children, className, ...props }) => {
  return (
    <motion.button
      className={cx(
        "px-[23px] py-2 btn-primary bg-blue-600 rounded-[20px] text-white text-lg tracking-wider cursor-pointer disabled:bg-slate-600",
        className
      )}
      whileTap={{ scale: props.disabled ? 1 : 0.9 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
