"use client";
import { useState } from 'react';

const Counter = ({ initialQuantity = 1, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity); // Notificar al padre
  };

  const decrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity); // Notificar al padre
    }
  };

  const resetQuantity = () => {
    setQuantity(1); // Reiniciar la cantidad a 1
    onQuantityChange(1); // Notificar al padre
  };

  return (
    <div className="flex flex-col items-center">
      <div className="join rounded-lg">
        <button
          className="join-item btn btn-sm bg-pink-600 text-white hover:bg-pink-700 border-none"
          onClick={decrement}
        >
          -
        </button>
        <button
          className="join-item btn btn-sm bg-pink-600 text-white hover:bg-pink-700 border-none w-10"
          onClick={resetQuantity} // Reiniciar la cantidad al hacer clic
        >
          {quantity}
        </button>
        <button
          className="join-item btn btn-sm bg-pink-600 text-white hover:bg-pink-700 border-none"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;