import CourseCard from './CourseCard';
import './Courses.css';
import './Content.css';

const FullStackDevelopment = () => {
  const courseData = [
    {
      image: '../public/javaFSD.png',
      title: 'Java Full Stack Development Course',
      languages: ['ENGLISH', 'TAMIL']
    },
    {
      image: '../public/mern.png',
      title: 'MERN Full Stack Development',
      languages: ['ENGLISH', 'TAMIL', 'HINDI']
    },
    {
      image: '../public/FSDprojects.png',
      title: 'Full-Stack Development Projects',
      languages: ['ENGLISH', 'TAMIL']
    },
    {
      image: '../public/FSDframeworks.png',
      title: 'Full-Stack Developer Frameworks',
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

export default FullStackDevelopment;
