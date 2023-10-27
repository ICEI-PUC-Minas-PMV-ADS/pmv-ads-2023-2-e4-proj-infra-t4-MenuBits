import { MenuSquare, PenSquare } from "lucide-react";
import "./style.css";
import PropTypes from "prop-types";

MenusCard.propTypes = {
  menus: PropTypes.array,
}

export default function MenusCard({ menus }) {
  return (
    <>
      <div className="flex flex-col rounded-xl card-height xl:w-3/12 md:w-3/6 sm:w-full w-full">
        <div className="flex flex-row gap-2 justify-center mb-2">
          <MenuSquare size={32} color="#930000" />
          <h4 className="text-center text-3xl font-bold">Meus Cardápios</h4>
        </div>

        <section className="flex flex-col gap-10 mx-10 h-4/5 overflow-y-auto scrollbar">
          {menus.map((menu) => (
            <div
              className="flex flex-col justify-between bg-red-900 rounded-2xl p-10 mx-2"
              key={menu.id}
            >
              <div className="flex flex-col justify-items-center items-center">
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src="https://placehold.co/80x70"
                    className="rounded-xl"
                    alt="food-image"
                  />
                  <h6 className="text-center font-bold text-white text-2xl">
                    {menu.title}
                  </h6>
                </div>

                <div className="bg-white border-solid border-2 border-orange-600 rounded-2xl p-2 flex flex-row align-middle mt-4">
                  <PenSquare size={25} color="#C75B00" />
                  <h1 className="mx-auto text-xl font-bold">
                    Cardápio Principal
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
