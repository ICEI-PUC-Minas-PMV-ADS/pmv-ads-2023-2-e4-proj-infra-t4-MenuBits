import React, { createContext, useContext, useState } from 'react';

// Criando o contexto
const MenuBitsContext = createContext();

// Componente que vai prover o estado para os componentes filhos
export const MenuBitsProvider = ({ children }) => {
    const [restaurantData, setRestaurantData] = useState({});
    const [menuId, setMenuId] = useState('');

  return (
    <MenuBitsContext.Provider value={{ setRestaurantData, restaurantData, setMenuId, menuId }}>
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