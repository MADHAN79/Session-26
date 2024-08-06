import CourseCard from './CourseCard';
import './Courses.css';

const Courses = () => {
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
    },
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
    },
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
    },
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

export default Courses;
