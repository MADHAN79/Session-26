import CourseCard from './CourseCard';
import './Courses.css';
import './Content.css';

const Career = () => {
  const courseData = [
      {
        image: '../public/FE.png',
        title: 'Frontend Developer',
        languages: ['ENGLISH', 'TAMIL']
      },
      {
        image: '../public/BE.png',
        title: 'Backend Developer',
        languages: ['ENGLISH', 'TAMIL']
      },
      {
        image: '../public/uiUX.png',
        title: 'UI/UX Developer',
        languages: ['ENGLISH', 'TAMIL']
      },
      {
        image: '../public/DScientist.png',
        title: 'Data Scientist',
        languages: ['ENGLISH', 'TAMIL']
      },
      {
        image: '../public/DataAnalyst.png',
        title: 'Data Analyst',
        languages: ['ENGLISH', 'TAMIL']
      },
      {
        image: '../public/CyberSpecialist.png',
        title: 'Cyber Security Specialist',
        languages: ['ENGLISH', 'TAMIL']
      }

];

return (
  <div className="courses">
    <div className="slider-container">
      <div className="slider">
        {courseData.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
    
  </div>
);
};

export default Career;
