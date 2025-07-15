import { Route, Routes } from 'react-router-dom';
import LandingPage from './Screens/LandingPage';
import Canvas from './Screens/Canvas';

const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/canvas" element={<Canvas/>}/>
         </Routes>
      </>
   );
};

export default App;
