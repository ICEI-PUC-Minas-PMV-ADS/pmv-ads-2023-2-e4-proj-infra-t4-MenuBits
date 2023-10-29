// import { Button } from "../../components/Buttons";
import backgroundImage from "../../../public/logo2.png";
import lupaImage from "../../../public/lupa.png";

export default function HomePage() {
  return (
    <div
      className="h-screen bg-cover bg-center pt-6"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-red-600">TA COM FOME DE QUÊ?</h2>
        <p className="text-red-600 pb-4">PROCURE AQUI O SEU CARDÁPIO IDEAL</p>
        {/* <input
          type="text"
          className="w-80"
          placeholder="O que você está procurando?"
          // Adicionando a classe do TailwindCSS
          className="input-with-search-icon"
        /> */}
        <div className="flex flex-row items-center gap-4 bg-white rounded-lg w-1/2">
          <img src={lupaImage} className="bg-white rounded-lg" alt="Lupa" />
          <input type="text" className="w-full outline-none" />
        </div>
      </div>
    </div>
  );
}
