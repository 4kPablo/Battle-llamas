import { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartActive, setIsCartActive] = useState(false);
  const [allLlamas, setAllLlamas] = useState([]);
  const [llamaCount, setLlamaCount] = useState(0);
  const [total, setTotal] = useState(0);

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
    <Context.Provider
      value={{
        allLlamas,
        total,
        llamaCount,
        onAddLlama,
        onRemoveLlama,
        onDeleteCart,
        onBuyCart,
        isCartActive,
        setIsCartActive,
      }}
    >
      {children}
    </Context.Provider>
  );
};
