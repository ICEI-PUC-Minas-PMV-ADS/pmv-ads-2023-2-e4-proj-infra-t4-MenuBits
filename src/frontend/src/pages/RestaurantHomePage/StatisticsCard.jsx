import {
  BadgeDollarSign,
  BarChart4,
  ChefHat,
  TrendingDown,
  Trophy,
  UtensilsCrossed,
} from "lucide-react";
import "./style.css";

export default function StatisticsCard() {
  return (
    <>
      <div className="flex flex-col rounded-xl main-card h-full xl:w-2/4 md:w-full sm:w-full w-full">
        <div className="p-4 w-full h-16 bg-primary">
          <h4 className="text-center font-bold text-3xl text-white">
            Restaurante
          </h4>
        </div>

        <section className="flex flex-row flex-wrap justify-center">
          <div className="xl:w-2/4 md:w-full sm:w-full w-full bg-cards p-10">
            <div className="flex flex-row justify-center gap-2 mb-2">
              <BarChart4 size={30} color="#930000" />
              <h6 className="text-center font-bold text-2xl">Estatísticas</h6>
            </div>

            <div className="flex flex-col justify-between statistic-card rounded-2xl p-10">
              <div className="flex flex-col justify-items-center items-center">
                <h6 className="text-center font-bold text-white text-2xl">
                  Total Itens Cadastrados
                </h6>
                <div className="bg-white border-solid border-2 border-red-900 w-3/4 rounded-2xl p-3 flex flex-row align-middle">
                  <UtensilsCrossed size={30} color="#C75B00" />
                  <h1 className="mx-auto text-2xl font-bold">10</h1>
                </div>
              </div>

              <div className="flex flex-col justify-items-center items-center">
                <h6 className="text-center font-bold text-white text-2xl">
                  Total de Cardápios Cadastrados
                </h6>
                <div className="bg-white border-solid border-2 border-red-900 w-3/4 rounded-2xl p-3 flex flex-row align-middle">
                  <ChefHat size={30} color="#C75B00" />
                  <h1 className="mx-auto text-2xl font-bold">10</h1>
                </div>
              </div>

              <div className="flex flex-col justify-items-center items-center">
                <h6 className="text-center font-bold text-white text-2xl">
                  Total de Vendas de Itens
                </h6>
                <div className="bg-white border-solid border-2 border-red-900 w-3/4 rounded-2xl p-3 flex flex-row align-middle">
                  <BadgeDollarSign size={30} color="#C75B00" />
                  <h1 className="mx-auto text-2xl font-bold">10</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col xl:w-2/4 md:w-full sm:w-full w-full">
            <div className="bg-cards p-10">
              <div className="flex flex-row justify-center gap-2 mb-2">
                <Trophy size={30} color="#930000" />
                <h6 className="text-center font-bold text-2xl">Mais Vendido</h6>
              </div>

              <div className="flex flex-col justify-between statistic-card rounded-2xl p-10 h-fit">
                <div className="flex flex-col justify-items-center items-center">
                  <div className="flex flex-row gap-2">
                    <img
                      src="https://placehold.co/80x70"
                      className="rounded-xl"
                      alt="food-image"
                    />
                    <h6 className="text-center font-bold text-white text-2xl">
                      Coca-Cola 2L
                    </h6>
                  </div>

                  <div className="bg-white border-solid border-2 border-red-900 w-3/4 rounded-2xl p-1 gap-2 flex flex-row align-middle mt-4">
                    <UtensilsCrossed size={30} color="#C75B00" />
                    <h1 className="mx-auto text-2xl font-bold">Bebidas</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cards p-10">
              <div className="flex flex-row justify-center gap-2 mb-2">
                <TrendingDown size={30} color="#930000" />
                <h6 className="text-center font-bold text-2xl">Menos Vendido</h6>
              </div>

              <div className="flex flex-col justify-between statistic-card rounded-2xl p-10 h-fit">
                <div className="flex flex-col justify-items-center items-center">
                  <div className="flex flex-row gap-2">
                    <img
                      src="https://placehold.co/80x70"
                      className="rounded-xl"
                      alt="food-image"
                    />
                    <h6 className="text-center font-bold text-white text-2xl">
                      Coca-Cola 2L
                    </h6>
                  </div>

                  <div className="bg-white border-solid border-2 border-red-900w-3/4 rounded-2xl p-1 gap-2 flex flex-row align-middle mt-4">
                    <UtensilsCrossed size={30} color="#C75B00" />
                    <h1 className="mx-auto text-2xl font-bold">Bebidas</h1>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </section>
      </div>
    </>
  );
}
