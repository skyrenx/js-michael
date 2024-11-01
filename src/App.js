import './App.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import WritePage from './components/WritePage';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/write" element={<WritePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
