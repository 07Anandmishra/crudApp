
import './App.css';
import About from './Components/Pages/About';
import Adduser from './Components/Pages/Adduser';
import Home from './Components/Pages/Home';
import Userlist from './Components/Pages/Userlist';
import Navbar from './Components/layout/Navbar'
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import PrivateComponent from './Components/Pages/PrivateComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Editdata from './Components/Pages/Editdata';
import Footer from './Components/layout/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Routes >
        <Route element={<PrivateComponent />}>
        
        <Route path='/about' element={<About />} />
        <Route path='/userlist' element={<Userlist />} />

        <Route path='/adduser' element={<Adduser />} />
        <Route path='/editdata/:id' element={<Editdata />}/>
        </Route>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
      <ToastContainer />
    
    </>
  );
}

export default App;
