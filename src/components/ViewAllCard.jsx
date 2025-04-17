import { FiPlus } from "react-icons/fi";
import "../styles/components/view-all-card.scss";

const ViewAllCard = ({ onClick }) => {
  return (
    <div className="view-all-card" onClick={onClick}>
      <FiPlus className="view-all-card__icon" />
      <span className="view-all-card__text">View All</span>
    </div>
  );
};

export default ViewAllCard;
