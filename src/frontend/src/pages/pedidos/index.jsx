import backgroundImage from "../../assets/pizzaNostra.png";

export default function MeusPedidos() {
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
      <div className="flex flex-col items-center justify-center">
        <div className="p-10 flex items-center justify-center w-full border-b border-gray-500">
          <h3 className="text-3xl font-bold">Meus Pedidos</h3>
        </div>
        <div
          className="bg-red-500 w-1/2 flex items-center justify-between p-4"
        >
          <button>Voltar ao Cardapio</button>
          <p>R$</p>
        </div>
        <div
          className="w-1/2 flex items-center justify-between p-4"
        >

        </div>
        <div
          className="w-1/2 flex items-center justify-between p-4"
        >
          <p>Total</p>
          <p>R$ 80,99</p>
        </div>
      </div>
    </div>
  );
}
