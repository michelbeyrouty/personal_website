import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  href?: string;
  onClick?: () => void;
  className?: string;
  animate?: any;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  animate,
  ...props
}: ButtonProps) {
  const baseClasses =
    variant === "text"
      ? "transition-colors font-medium"
      : "px-6 py-3 rounded-lg transition-colors backdrop-blur-sm font-medium";

  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "border border-blue-400 hover:bg-blue-400/20 text-white",
    text: "text-gray-300 hover:text-blue-400 bg-transparent border-none p-0 m-0",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const ButtonComponent = motion.a;

  if (href) {
    return (
      <ButtonComponent
        href={href}
        className={buttonClasses}
        animate={animate}
        {...props}
      >
        {children}
      </ButtonComponent>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      animate={animate}
      {...props}
    >
      {children}
    </motion.button>
  );
}
