
import './App.css';
import Dialogs from './Contents/Dialogs/dialogs';
import Header from './Contents/Header/header';
import Navbar from './Contents/Navbar/navbar';
import Profile from './Contents/Profile/profile';
import { Routes, Route } from "react-router-dom";
import Bestiary from './Contents/Bestiary/bestiary';
import Maps from './Contents/Maps/maps';
import Home from './Contents/Home/home';
import Baraholka from './Contents/Baraholka/baraholka';











function App(props) {
  return (
    <div className="App-wrapper">
      <Header />
      <Navbar />

      <div className=''>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/dialogs/*' element={<Dialogs />} />
          <Route path='/bestiary/*' element={<Bestiary />} />
          <Route path='/maps' element={<Maps />} />



          <Route path='/bar' element={<Baraholka />} />

        </Routes>



      </div>

    </div >
  );
}

export default App;
