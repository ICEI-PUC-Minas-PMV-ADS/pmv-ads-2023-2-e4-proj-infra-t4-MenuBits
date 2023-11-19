import React, { createContext, useContext, useState } from 'react';

// Criando o contexto
const MenuBitsContext = createContext();

// Componente que vai prover o estado para os componentes filhos
export const StateProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <MenuBitsContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MenuBitsContext.Provider>
  );
};

export const useMenuBitsState = () => {
    const context = useContext(MenuBitsContext);
    if (!context) {
      throw new Error('useGlobalState must be used within a StateProvider');
    }
    return context;
  };