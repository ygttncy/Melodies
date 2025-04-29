import "../styles/components/artist-card.scss";
import { Link } from "react-router-dom";

const ArtistCard = ({ name, image, id }) => {
  return (
    <div className="artist-card__container">
      <Link to={`/artist/${id}`} className="artist-card">
      <img src={image} alt={name} className="artist-card__image" />
      <p className="artist-card__name">{name}</p> 
    </Link>
    </div>
  
    
  );
};

export default ArtistCard;
