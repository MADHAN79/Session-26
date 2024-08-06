
import './Content.css';

const All = () => {
  return (
    <div className="content">
      
      <div className="slider-container">
        <div className="slider">
          <div className="card">
            <img src="https://via.placeholder.com/300" alt="Java Full Stack Development Course" />
            <div className="card-content">
              <span className="most-popular">MOST POPULAR</span>
              <h3>Java Full Stack Development Course</h3>
              <p>Available in</p>
              <div className="languages">
                <span>ENGLISH</span>
                <span>TAMIL</span>
              </div>
              <button className="know-more">Know More &raquo;</button>
            </div>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300" alt="MERN Full Stack Development" />
            <div className="card-content">
              <span className="most-popular">MOST POPULAR</span>
              <h3>MERN Full Stack Development</h3>
              <p>Available in</p>
              <div className="languages">
                <span>ENGLISH</span>
                <span>TAMIL</span>
                <span>HINDI</span>
              </div>
              <button className="know-more">Know More &raquo;</button>
            </div>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300" alt="Data Science Course" />
            <div className="card-content">
              <span className="most-popular">MOST POPULAR</span>
              <h3>Data Science Course</h3>
              <p>Available in</p>
              <div className="languages">
                <span>ENGLISH</span>
                <span>TAMIL</span>
              </div>
              <button className="know-more">Know More &raquo;</button>
            </div>
          </div>
        </div>
        <div className="slider-controls">
          <button className="slider-prev">&lt;</button>
          <div className="slider-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <button className="slider-next">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default All;
