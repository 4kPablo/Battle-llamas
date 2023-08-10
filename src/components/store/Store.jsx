import ProductsContainer from './ProductsContainer'
import { useState } from "react";

const Store = () => {
  const [alerts, setAlerts] = useState('');

  return (
    <div className="text-white p-2 bg-[#0d0d0d]">
      <ProductsContainer />
    </div>
  )
}

export default Store;