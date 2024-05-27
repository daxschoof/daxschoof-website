import { ReactNode } from "react";

const Card = (props: ICardProps) => {
  return <div className="card">{props.children}</div>;
};

interface ICardProps {
  children: ReactNode;
}

export default Card;
