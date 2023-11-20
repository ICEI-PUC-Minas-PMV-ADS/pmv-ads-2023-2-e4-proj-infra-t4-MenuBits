import { Routes } from "./src/routes";

export default function App() {
  return (
    <MenuBitsProvider>
      <Routes />
    </MenuBitsProvider>
  );
}
