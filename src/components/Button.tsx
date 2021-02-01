import React, { ReactElement } from "react";

type ButtonProps = {
  icon?: ReactElement;
  text: string;
  className?: string;
  onClick?: () => void;
};

const classes = `
text-white
rounded
p-2
text-center
transition
duration-300
flex
items-center
justify-center
cursor-pointer
`;

const Button = ({ icon, text, className, onClick }: ButtonProps) => {
  return (
    <div
      className={classes + " " + (className || "")}
      onClick={() => (onClick ? onClick() : null)}
    >
      {icon && icon}
      <span className="ml-2">{text}</span>
    </div>
  );
};

export default Button;
