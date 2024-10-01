import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import InfoDemo from './pages/InfoDemo'
import Demo from './pages/Demo';
import Dashboard from './pages/Dashboard';
import BarChartView from './components/BarChartView';
import LinechartView from './components/LineChartView';
import SliderChartView from './components/SliderChartView';

function App() {

  const [ language, setLanguage ] = useState('es')

  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path='/ArtesaniaLanding' element={<Home language={language} />} />
            <Route path='/ArtesaniaLanding/demoinfo' element={<InfoDemo language={language} />} />
            <Route path='/ArtesaniaLanding/demo' element={<Demo language={language} />} />
            <Route path='/ArtesaniaLanding/dashboard' element={<Dashboard />} >
                <Route path='slider' element={<SliderChartView />} />
                <Route path='barChart' element={<BarChartView />} />
                <Route path='lineChart' element={<LinechartView />}  />
                {/* <Route path='map' /> */}
          </Route >
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
