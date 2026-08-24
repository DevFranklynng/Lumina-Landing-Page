import { ArrowRight } from "lucide-react";

const Button = ({
  children,
  variant = "primary",
  icon = false,
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300";
  const variants = {
    primary: "bg-[#1A1A1A] text-white hover:bg-[#E2661F]",
    light: "bg-white text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white",
    outline:
      "border border-white/40 text-white hover:bg-white hover:text-[#1A1A1A]",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}} {...props`}>
      {children}
      {icon && <ArrowRight size={16} />}
    </button>
  );
};

export default Button;
