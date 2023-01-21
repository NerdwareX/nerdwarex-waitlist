import cx from "classnames";
import { motion } from "framer-motion";

const Button = ({ pill = true, children, className, ...props }) => {
  return (
    <motion.button
      className={cx(
        "px-[23px] py-2 btn-primary rounded-[20px] text-white text-lg tracking-wider cursor-pointer",
        className
      )}
      whileTap={{ scale: 0.9 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
