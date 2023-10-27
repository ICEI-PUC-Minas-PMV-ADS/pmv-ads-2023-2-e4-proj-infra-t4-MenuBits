import { IceCream2 } from "lucide-react";
import "./style.css";

export default function MyItensCard() {
  return (
    <>
      <div className="flex flex-col rounded-xl card-height xl:w-3/12 md:w-3/6 sm:w-full w-full">
        <div className="flex flex-row gap-2 justify-center mb-2">
          <IceCream2 size={32} color="#930000" />
          <h4 className="text-center text-3xl font-bold">Meus Itens</h4>
        </div>

        <section className="flex flex-col gap-10 mx-10 h-4/5 overflow-y-auto flex-grow scrollbar">
          <div className="flex flex-col justify-between statistic-card h-fit rounded-2xl p-10 mx-2 ">
            <div className="flex flex-col justify-items-center items-center">
              <div className="flex flex-row gap-2 items-center">
                <img
                  src="https://placehold.co/80x70"
                  className="rounded-xl"
                  alt="food-image"
                />
                <h6 className="text-center font-bold text-white text-2xl">
                  Coca-Cola 2L
                </h6>
              </div>

              <div className="bg-white border-solid border-2 border-orange-600 w-3/4 rounded-2xl p-2 flex flex-row align-middle mt-4">
                <h1 className="mx-auto text-xl font-bold text-center">
                  Cardápio Principal
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between statistic-card h-fit rounded-2xl p-10 mx-2">
            <div className="flex flex-col justify-items-center items-center">
              <div className="flex flex-row gap-2 items-center">
                <img
                  src="https://placehold.co/80x70"
                  className="rounded-xl"
                  alt="food-image"
                />
                <h6 className="text-center font-bold text-white text-2xl">
                  Coca-Cola 2L
                </h6>
              </div>

              <div className="bg-white border-solid border-2 border-orange-600 w-3/4 rounded-2xl p-2 flex flex-row align-middle mt-4">
                <h1 className="mx-auto text-xl font-bold text-center">
                  Cardápio Principal
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between statistic-card h-fit rounded-2xl p-10 mx-2">
            <div className="flex flex-col justify-items-center items-center">
              <div className="flex flex-row gap-2 items-center">
                <img
                  src="https://placehold.co/80x70"
                  className="rounded-xl"
                  alt="food-image"
                />
                <h6 className="text-center font-bold text-white text-2xl">
                  Coca-Cola 2L
                </h6>
              </div>

              <div className="bg-white border-solid border-2 border-orange-600 w-3/4 rounded-2xl p-2 flex flex-row align-middle mt-4">
                <h1 className="mx-auto text-xl font-bold text-center">
                  Cardápio Principal
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between statistic-card h-fit rounded-2xl p-10 mx-2">
            <div className="flex flex-col justify-items-center items-center">
              <div className="flex flex-row gap-2 items-center">
                <img
                  src="https://placehold.co/80x70"
                  className="rounded-xl"
                  alt="food-image"
                />
                <h6 className="text-center font-bold text-white text-2xl">
                  Coca-Cola 2L
                </h6>
              </div>

              <div className="bg-white border-solid border-2 border-orange-600 w-3/4 rounded-2xl p-2 flex flex-row align-middle mt-4">
                <h1 className="mx-auto text-xl font-bold text-center">
                  Cardápio Principal
                </h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
