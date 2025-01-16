import { Canvas } from '@react-three/fiber';
import SplineViewer from './Components/SplineViewer';
// import Header from './Components/Header';
import Navbar from './Components/Header';


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        {/* Add the text overlay */}
        <div className="text-overlay">
          Your Business Need Our Software Solution
        </div>

       
        <div className="scroll-container">
          <SplineViewer />
        </div>
        
      </div>
    </div>
  );
}

export default App;
