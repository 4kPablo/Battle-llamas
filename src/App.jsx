import { React, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing } from './components/landing/Landing.jsx';
import { Store } from './components/store/Store.jsx';
import { Login } from './components/login/Login.jsx';
import { Register } from './components/login/Register.jsx';
import Navbar from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { About } from './components/about/About.jsx';
import { Contact } from './components/contact/Contact.jsx';
import { Error404 } from './components/404.jsx';

function App() {
  const [allLlamas, setAllLlamas] = useState([]); // Almacena la lista de llamas en el carrito
  const [total, setTotal] = useState(0); // Almacena el precio total de todas las llamas en el carrito
  const [llamaCount, setLlamaCount] = useState(0); // Almacena la cantidad total de llamas en el carrito

  // Función para agregar una llama al carrito
  const onAddLlama = (llama) => {
    console.table(llama);
    if (allLlamas.find((item) => item.id === llama.id)) {
      // Si la llama ya está en el carrito, incrementa la cantidad
      const llamas = allLlamas.map((item) =>
        item.id === llama.id ? { ...item, quantity: item.quantity + 1 } : item,
      );
      setTotal(total + llama.price); // Suma el precio de una llama al total
      setLlamaCount(llamaCount + 1); // Incrementa en 1 la cantidad total de llamas
      setAllLlamas([...llamas]); // Actualiza la lista de llamas en el carrito
    } else {
      // Si la llama no está en el carrito, la agrega con cantidad 1
      setTotal(total + llama.price); // Suma el precio de una llama al total
      setLlamaCount(llamaCount + 1); // Incrementa en 1 la cantidad total de llamas
      setAllLlamas([...allLlamas, { ...llama, quantity: 1 }]); // Agrega la nueva llama al carrito
    }
  };

  // Función para quitar una llama del carrito
  const onRemoveLlama = (llama) => {
    if (llama.quantity > 1) {
      // Si la cantidad de la llama es mayor a 1, reduce la cantidad
      const llamas = allLlamas.map((item) =>
        item.id === llama.id ? { ...item, quantity: item.quantity - 1 } : item,
      );
      setTotal(total - llama.price); // Resta el precio de una llama al total
      setLlamaCount(llamaCount - 1); // Reduce en 1 la cantidad total de llamas
      setAllLlamas([...llamas]); // Actualiza la lista de llamas en el carrito
    } else {
      // Si la cantidad de la llama es 1, elimina la llama del carrito
      const filteredLlamas = allLlamas.filter((item) => item.id !== llama.id);
      setTotal(total - llama.price * llama.quantity); // Resta el precio total de estas llamas al total
      setAllLlamas(filteredLlamas); // Actualiza la lista de llamas en el carrito
      setLlamaCount(llamaCount - llama.quantity); // Reduce la cantidad total de llamas
    }
  };

  const onDeleteCart = () => {
    setAllLlamas([]);
    setLlamaCount(0);
    setTotal(0);
  };

  const onBuyCart = () => {
    setAllLlamas([]);
    setLlamaCount(0);
    setTotal(0);
    alert('¡Llamas compradas!');
  };

  return (
    <>
      <Navbar
        allLlamas={allLlamas}
        total={total}
        llamaCount={llamaCount}
        onAddLlama={onAddLlama}
        onRemoveLlama={onRemoveLlama}
        onDeleteCart={onDeleteCart}
        onBuyCart={onBuyCart}
      />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route
          path='/store'
          element={<Store onAddLlama={onAddLlama} total={total} />}
        />
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
