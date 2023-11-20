import { Routes } from "./src/routes";
import { MenuBitsProvider } from "./src/context/MenuBitsContext";

export default function App() {
  return (
    <MenuBitsProvider>
      <Routes />
    </MenuBitsProvider>
  );
}
