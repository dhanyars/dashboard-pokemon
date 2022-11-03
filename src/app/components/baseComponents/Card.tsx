/* eslint-disable react/react-in-jsx-scope */
import react from "react";
import "./styles/_card.scss";

export const Card: React.FC<any> = ({ onClick, children, style }) => {
  return (
    <div onClick={onClick} className="card" style={style}>
      {children}
    </div>
  );
};

export default Card;
