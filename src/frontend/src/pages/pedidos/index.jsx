import { useEffect, useState } from "react";
import backgroundImage from "../../assets/pizzaNostra.png";
import remove from "../../assets/remove.png";
import axios from "axios";

export default function MeusPedidos() {
  const [order, setOrder] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [restaurante, setRestaurantData] = useState();

  useEffect(() => {
    const local = localStorage.getItem("pedidos");
    const parsedLocal = JSON.parse(local) || [];
    setOrder(parsedLocal);

    // Calcula o total da compra somando os preços de cada item no carrinho
    const total = parsedLocal.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/restaurante/12`)
      .then((res) => {
        setRestaurantData(res.data);
      })
      .catch((err) => {
        alert("Erro ao Carregar dados");
        console.log(JSON.stringify(err));
      });
  }, []);

  const handleRemove = (id) => {
    const copyOrder = [...order];
    const pizzaIndex = copyOrder.findIndex((item) => item.id === id);
    copyOrder.splice(pizzaIndex, 1);
    setOrder(copyOrder);

    // Recalcula o total da compra após a remoção do item
    const total = copyOrder.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  return (
    <div>
      <div
        className="bg-image w-full h-96 bg-left cover flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <h1 className="text-white font-semibold text-7xl">Nostra Pizza</h1>
      </div>
      <div className="flex flex-col items-center justify-center h-auto pb-20">
        <div className="p-10 flex items-center justify-center w-full border-b border-gray-500">
          <h3 className="text-3xl font-bold">Meus Pedidos</h3>
        </div>
        {order.length === 0 ? (
          <p className="text-2xl mt-4">CARRINHO VAZIO</p>
        ) : (
          <div className="w-1/2 bg-amber-100">
            {order.map((item) => (
              <div
                key={item.id}
                className="flex w-full items-center justify-between p-4"
              >
                <div className="flex items-center gap-4">
                  <button onClick={() => handleRemove(item.id)}>
                    <img src={remove} className="w-6" alt="" />
                  </button>
                  <img src={item.img} alt="Pizza" />
                  <p>{item.name}</p>
                </div>
                <div>
                  <p>R$ {item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {order.length > 0 && (
          <div className="w-1/2 bg-red-600 p-4 flex items-center justify-between">
            <p>TOTAL</p>
            <p>R$ {totalPrice}</p>
          </div>
        )}
        <div className="pt-12">
          <a href="/menu-page" className="rounded-xl bg-red-600 p-4 text-white">
            VOLTAR AO CARDÁPIO
          </a>
        </div>
      </div>
    </div>
  );
}
