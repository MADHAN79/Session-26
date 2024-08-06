
import './Content.css';

const CourseCard = ({ image, title, languages, isPopular }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>Available in</p>
        <div className="languages">
          {languages.map((lang) => (
            <span key={lang}>{lang}</span>
          ))}
        </div>
        <button className="know-more">More Details &raquo;</button>
      </div>
    </div>
  );
};

export default CourseCard;
