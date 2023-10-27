import MenusCard from './MenusCard';
import MyItensCard from './MyItensCard';
import StatisticsCard from './StatisticsCard';
import './style.css'

export default function RestaurantHomePage() {
  return (
      <div className="flex flex-row flex-wrap w-full max-h-screen justify-center">
        <MenusCard />
        <StatisticsCard />
        <MyItensCard />
      </div>
  );
}