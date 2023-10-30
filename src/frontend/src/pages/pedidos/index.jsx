import { useEffect, useState } from "react";
import p1 from "../../assets/p1.png";
import backgroundImage from "../../assets/pizzaNostra.png";
import remove from "../../assets/remove.png";

export default function MeusPedidos() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const local = localStorage.getItem("pedidos")
    console.log(local)
    setOrder(JSON.parse(local) || []);
    
  }, [])

  const handleRemove = (id) => {
    const copyOrder = [...order];
    const pizzaIndex = copyOrder.findIndex((item) => item.id === id);
    copyOrder.splice(pizzaIndex, 1);
    setOrder(copyOrder);
  };

  return (
    <div>
      <div
        className="bg-image w-full  h-96 bg-left cover flex items-center justify-center"
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
        <div className="w-1/2 bg-red-600 p-4 flex items-center justify-between">
          {/* <p>TOTAL</p>
          <p>R$ {totalPrice}</p> */}
        </div>
        <div className="pt-12">
          <a href="/cardapio" className="rounded-xl bg-red-600 p-4 text-white">VOLTAR AO CARDÁPIO</a>
        </div>
      </div>
    </div>
  );
}
