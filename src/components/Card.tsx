import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="w-81 desktop:w-104 p-6 m-6 bg-blue-dark rounded-3xl">
      {children}
    </div>
  );
};

export default Card;
