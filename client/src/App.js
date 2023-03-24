import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Signup from './components/Signup';
import Contact from './components/Contact'
import PredictorPicker from './components/Predictor-Picker';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/predictorpicker' element={<PredictorPicker />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
