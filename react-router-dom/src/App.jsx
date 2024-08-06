
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import All from './components/All';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import './App.css';


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                All
              </NavLink>
            </li>
            <li>
              <NavLink to="/fullstack" className={({ isActive }) => (isActive ? 'active' : '')}>
                Full Stack Development
              </NavLink>
            </li>
            <li>
              <NavLink to="/datascience" className={({ isActive }) => (isActive ? 'active' : '')}>
                Data Science
              </NavLink>
            </li>
            <li>
              <NavLink to="/cybersecurity" className={({ isActive }) => (isActive ? 'active' : '')}>
                Cyber Security
              </NavLink>
            </li>
            <li>
              <NavLink to="/career" className={({ isActive }) => (isActive ? 'active' : '')}>
                Career
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/fullstack" element={<FullStackDevelopment />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
      
    </Router>
    
  );
};

export default App;
