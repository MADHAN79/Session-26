import CourseCard from './CourseCard';
import './Courses.css';
import './Content.css';

const DataScience = () => {
  const courseData = [
    {
      image: '../public/DSexamples.png',
      title: '12 Real World Data Science Examples',
      languages: ['ENGLISH', 'TAMIL']
    },
    {
      image: '../public/CommerceToDS.png',
      title: 'Commerce Student Do Data Science?',
      languages: ['ENGLISH', 'TAMIL']
    },
    {
      image: '../public/AIvsDS.png',
      title: 'AI vs ML vs Data Science In 2024?',
      languages: ['ENGLISH', 'TAMIL']
    },
    {
      image: '../public/DSsalary.png',
      title: 'Data Scientist Salary in India | 2024',
      languages: ['ENGLISH', 'TAMIL']
    },
    {
      image: '../public/ProuductDS.png',
      title: 'Product-Based Companies for DS',
      languages: ['ENGLISH', 'TAMIL']
    },
    {
      image: '../public/RoadmapDS.png',
      title: 'Roadmap for Data Science in 2024',
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

export default DataScience;
