/***** COMPONENTS  *****/
import Hero from "../src/components/Hero/Hero";
import Carousel from "../src/components/Carousel/Carousel";
import TakeawayBanner from "../src/components/TakeAway/TakeawayBanner";
import { ThemeContext } from "./context/ThemeContextProvider";
import { useContext } from "react";
import Reserva from "../src/components/about/reserva";
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
