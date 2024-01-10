import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Landing } from './components/landing/Landing.jsx';
import { Store } from './components/store/Store.jsx';
import { Login } from './components/login/Login.jsx';
import { Register } from './components/login/Register.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { About } from './components/about/About.jsx';
import { Contact } from './components/contact/Contact.jsx';
import { Error404 } from './components/404.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/store' element={<Store />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/404' element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
