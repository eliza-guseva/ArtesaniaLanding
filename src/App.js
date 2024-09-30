import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Labeling from './components/Labeling';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import InfoDemo from './pages/InfoDemo'
import Login from './pages/Login'
import Demo from './pages/Demo';
// import IsPrivate from './components/IsPrivate';
import IsAdmin from './components/IsAdmin';
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
          <Route path='/' element={<Home language={language} />} />
          <Route path='/demoinfo' element={<InfoDemo language={language} />} />
          <Route path='/demo' element={<Demo language={language} />} />
          <Route path='/dashboard' element={<Dashboard />} >
            <Route path='slider' element={<SliderChartView />} />
            <Route path='barChart' element={<BarChartView />} />
            <Route path='lineChart' element={<LinechartView />}  />
            {/* <Route path='map' /> */}
          </Route >
          <Route path='/login' element={<Login />} />
          <Route path='/labeling' element={<IsAdmin> <Labeling /> </IsAdmin>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
