"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type React from "react";

interface CustomButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "link";
  className?: string;
  arrowClassName?: string;
  buttonTransition?: string;
  arrowTransition?: string;
  arrowSize?: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  arrowClassName,
  buttonTransition,
  arrowTransition,
  arrowSize = 20,
}) => {
  const baseClasses =
    "group relative flex items-center justify-center rounded-full font-medium w-fit text-sm px-4 py-2";

  const variantClasses = {
    primary: "bg-[#FFBF00] text-black hover:bg-[#FFBF00]/80",
    secondary: "bg-black text-white hover:bg-black/80",
    outline:
      "bg-transparent text-[#FFBF00] border-2 border-[#FFBF00] hover:bg-[#FFBF00]/10",
    link: "bg-transparent text-[#FFBF00]",
  };

  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    buttonTransition,
    className
  );

  const defaultArrowClasses =
    "ml-2 flex items-center justify-center rounded-full bg-white";
  const arrowClasses = cn(defaultArrowClasses, arrowTransition, arrowClassName);

  const content = (
    <>
      {children}
      <span className={arrowClasses}>
        <ArrowRight className="text-[#FFBF00] -rotate-45" size={arrowSize} />
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  );
};

export default CustomButton;
