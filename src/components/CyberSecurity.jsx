import CourseCard from './CourseCard';
import './Courses.css';
import './Content.css';

const CyberSecurity = () => {
  const courseData = [
    {
      image: '../public/CyberVSeh.png',
      title: 'Cybersecurity Vs Ethical Hacking',
      languages: ['ENGLISH', 'TAMIL']
    },
    {
      image: '../public/CSroadmap.png',
      title: 'Beginners Cybersecurity Roadmap',
      languages: ['ENGLISH', 'TAMIL']
    },
    {
      image: '../public/TypesOfH.png',
      title: 'What Is Hacking? & Types of Hacking',
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

export default CyberSecurity;
