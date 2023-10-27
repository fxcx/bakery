/***** COMPONENTS  *****/
import Hero from "../../components/Hero/Hero";
import Carousel from "../../components/Carousel/Carousel";
import TakeawayBanner from "../../components/TakeAway/TakeawayBanner";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { useContext } from "react";
import Reserva from "../../components/reserva/reservaComponent";
export default function Home() {
  const data = useContext(ThemeContext);

  const [theme] = data;
  return (
    <main className={theme}>
      <Hero />
      <Carousel />
      <TakeawayBanner />
      <Reserva />
    </main>
  );
}
