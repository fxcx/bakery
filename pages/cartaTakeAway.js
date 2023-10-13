import Card from "./components/TakeAway/Card/Card";
import Loader from "./components/TakeAway/Loader";
import TakeawayBanner from "./components/TakeAway/TakeawayBanner";

export default function CartaTakeAway() {
  return (
    <section>
      {/* Banner Section */}
      <TakeawayBanner />
      <Card />
      {/* El loader se muestra solo cuando se esta cargando la data */}
      <Loader />
    </section>
  );
}
