// import { Button } from "../../components/Buttons";
import { useEffect, useState } from "react";
import backgroundImage from "../../assets/logo2.png";
import lupaImage from "../../assets/lupa.png";
import p1 from "../../assets/p1.png";
import time from "../../assets/time.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function HomePage() {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/menu-page/${id}`);
  };
  
  

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/restaurante`).then((response) => {
      console.log(response.data)
    })
  });

  console.log(id);
  return (
    <div
      className="h-screen bg-cover bg-center pt-6 "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-red-600">TA COM FOME DE QUÊ?</h2>
        <p className="text-red-600 pb-4">PROCURE AQUI O SEU CARDÁPIO IDEAL</p>

        <div className="flex flex-row items-center gap-4 bg-white rounded-lg w-1/3">
          <button onClick={handleRedirect}>
            <img src={lupaImage} className="bg-white rounded-lg" alt="Lupa" />
          </button>
          <input
            type="text"
            className="w-full outline-none text-center"
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className="absolute right-0 top-36 p-6 flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <img src={time} alt="Ultimos acessos" />
            <p>Últimos acessos</p>
          </div>
          <div className="bg-red-700 p-4 rounded-lg flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <img src={p1} alt="Pizza" className="rounded-xl" />
              <p className="font-bold text-white">Nostra Pizza</p>
            </div>
            <button className="p-2 bg-white rounded-xl">
              Cardápio principal
            </button>
          </div>
          <div className="bg-red-700 p-4 rounded-lg flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <img src={p1} alt="Pizza" className="rounded-xl" />
              <p className="font-bold text-white">Nostra Pizza</p>
            </div>
            <button className="p-2 bg-white rounded-xl">
              Cardápio principal
            </button>
          </div>
          <div className="bg-red-700 p-4 rounded-lg flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <img src={p1} alt="Pizza" className="rounded-xl" />
              <p className="font-bold text-white">Nostra Pizza</p>
            </div>
            <button className="p-2 bg-white rounded-xl">
              Cardápio principal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
