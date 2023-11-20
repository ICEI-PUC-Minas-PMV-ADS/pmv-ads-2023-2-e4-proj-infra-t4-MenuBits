import React, { createContext, useContext, useState } from 'react';

// Criando o contexto
const MenuBitsContext = createContext();

// Componente que vai prover o estado para os componentes filhos
export const StateProvider = ({ children }) => {
    const [restaurantName, setRestaurantName] = useState('');

    const handleRestaurantNameChange = (value) => {
        setRestaurantName(value);
    };

  return (
    <MenuBitsContext.Provider value={{ handleRestaurantNameChange, restaurantName }}>
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